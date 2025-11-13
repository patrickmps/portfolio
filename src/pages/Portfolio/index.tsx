import IncluVisaoLogo from "src/assets/incluvisao-logo.png";
import { CardProject } from "../../components/CardProject";
import { TitleSection } from "../../components/TitleSection";
import { useGitHubRepos } from "../../hooks/useGitHubRepos";
import "./style.scss";

export const Portfolio = () => {
  const { projects, loading, error } = useGitHubRepos();

  return (
    <section className="portfolio" id="portfolio">
      <TitleSection title="Portfólio" />
      {loading && (
        <div className="loading-message">
          <p>Carregando projetos do GitHub...</p>
        </div>
      )}
      {error && (
        <div className="error-message">
          <p>Erro ao carregar projetos: {error}</p>
        </div>
      )}
      {!loading && !error && (
        <div id="projects">
          <CardProject
            key="incluvisao"
            linkGitHub="https://github.com/restic36/aplicacao-acessiblidade-pos-front"
            title="IncluVisão"
            desc="Aplicativo mobile desenvolvido com React Native (via Expo), focado em acessibilidade para terminais POS (Point of Sale, ou Ponto de Venda). O objetivo é proporcionar uma experiência inclusiva e segura para pessoas cegas ou com baixa visão durante o uso de maquininhas de cartão, com ênfase na inserção do PIN através de feedback auditivo."
            img={IncluVisaoLogo}
          />
          {projects.length === 0 ? (
            <p>Nenhum projeto encontrado.</p>
          ) : (
            projects.map((project) => (
              <CardProject
                key={project.title}
                linkGitHub={project.links.github}
                linkDemo={project.links.demo}
                title={project.title}
                desc={project.description}
                img={project.img}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
};
