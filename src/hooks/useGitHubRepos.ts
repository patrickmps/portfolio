import { useEffect, useState } from "react";
import { GitHubRepository, ProjectData } from "../types/github";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "patrickmps";
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Token opcional do GitHub para aumentar limite de requisições
// Para obter um token: https://github.com/settings/tokens
// Configure no arquivo .env como VITE_GITHUB_TOKEN
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

// Cache local com validade configurável
const CACHE_KEY = "github_repos_cache";
const CACHE_DURATION =
  parseInt(import.meta.env.VITE_CACHE_DURATION) || 60 * 60 * 1000; // padrão: 1 hora

interface CacheData {
  projects: ProjectData[];
  timestamp: number;
}

export const useGitHubRepos = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar do cache
  const getFromCache = (): ProjectData[] | null => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const cacheData: CacheData = JSON.parse(cached);
      const now = Date.now();

      // Verificar se o cache ainda é válido
      if (now - cacheData.timestamp < CACHE_DURATION) {
        return cacheData.projects;
      }

      // Cache expirado
      localStorage.removeItem(CACHE_KEY);
      return null;
    } catch (error) {
      console.error("Erro ao ler cache:", error);
      return null;
    }
  };

  // Função para salvar no cache
  const saveToCache = (projects: ProjectData[]) => {
    try {
      const cacheData: CacheData = {
        projects,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error("Erro ao salvar cache:", error);
    }
  };

  const extractImageFromReadme = async (
    owner: string,
    repo: string,
  ): Promise<string> => {
    try {
      const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
      };

      if (GITHUB_TOKEN) {
        headers["Authorization"] = `token ${GITHUB_TOKEN}`;
      }

      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        { headers },
      );

      if (!response.ok) {
        return "";
      }

      const data = await response.json();
      const content = atob(data.content);

      // Procurar por imagens no README (markdown e HTML)
      // 1. Tentar encontrar imagem em formato Markdown: ![alt](url)
      const markdownImageRegex = /!\[.*?\]\((.*?)\)/;
      const markdownMatch = content.match(markdownImageRegex);

      if (markdownMatch && markdownMatch[1]) {
        const imageUrl = markdownMatch[1];
        // Se for uma URL relativa, converter para URL absoluta do GitHub
        if (!imageUrl.startsWith("http")) {
          return `https://raw.githubusercontent.com/${owner}/${repo}/main/${imageUrl}`;
        }
        return imageUrl;
      }

      // 2. Tentar encontrar imagem em tag HTML: <img src="url" />
      const htmlImageRegex = /<img[^>]+src=["']([^"']+)["']/i;
      const htmlMatch = content.match(htmlImageRegex);

      if (htmlMatch && htmlMatch[1]) {
        const imageUrl = htmlMatch[1];
        // Se for uma URL relativa, converter para URL absoluta do GitHub
        if (!imageUrl.startsWith("http")) {
          return `https://raw.githubusercontent.com/${owner}/${repo}/main/${imageUrl}`;
        }
        return imageUrl;
      }

      return "";
    } catch (error) {
      console.error(`Error fetching README for ${repo}:`, error);
      return "";
    }
  };

  const hasReadme = async (owner: string, repo: string): Promise<boolean> => {
    try {
      const headers: HeadersInit = {
        Accept: "application/vnd.github.v3+json",
      };

      if (GITHUB_TOKEN) {
        headers["Authorization"] = `token ${GITHUB_TOKEN}`;
      }

      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        { headers },
      );
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Tentar buscar do cache primeiro
        const cachedProjects = getFromCache();
        if (cachedProjects) {
          console.log("Usando projetos do cache");
          setProjects(cachedProjects);
          setLoading(false);
          return;
        }

        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
        };

        if (GITHUB_TOKEN) {
          headers["Authorization"] = `token ${GITHUB_TOKEN}`;
        }

        const response = await fetch(GITHUB_API_URL, { headers });

        if (!response.ok) {
          const errorData = await response.json();
          if (
            response.status === 403 &&
            errorData.message?.includes("rate limit")
          ) {
            throw new Error(
              "Limite de requisições da API do GitHub excedido. Tente novamente em alguns minutos.",
            );
          }
          throw new Error("Erro ao buscar repositórios do GitHub");
        }

        const repos: GitHubRepository[] = await response.json();

        // Ordenar por data de atualização (mais recentes primeiro)
        repos.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        );

        // Filtrar repositórios que têm descrição
        const reposWithDescription = repos.filter(
          (repo) => repo.description && repo.description.trim() !== "",
        );

        // Verificar quais têm README e extrair imagens
        const projectsData: (ProjectData | null)[] = await Promise.all(
          reposWithDescription.map(async (repo) => {
            const readmeExists = await hasReadme(GITHUB_USERNAME, repo.name);

            if (!readmeExists) {
              return null;
            }

            const imageUrl = await extractImageFromReadme(
              GITHUB_USERNAME,
              repo.name,
            );

            return {
              title: repo.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
              description: repo.description || "",
              img: imageUrl,
              links: {
                github: repo.html_url,
                demo: repo.homepage || "",
              },
            };
          }),
        );

        // Filtrar nulls (repositórios sem README)
        const validProjects = projectsData.filter(
          (project): project is ProjectData => project !== null,
        );

        setProjects(validProjects);
        saveToCache(validProjects); // Salvar no cache
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { projects, loading, error };
};
