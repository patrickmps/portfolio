export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  language: string | null;
}

export interface ProjectData {
  title: string;
  description: string;
  img: string;
  links: {
    github: string;
    demo: string;
  };
}
