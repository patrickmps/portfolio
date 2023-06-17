import { CardProject } from "../../components/CardProject";
import { TitleSection } from "../../components/TitleSection";
import data from "./projects.json";
import "./style.scss";

export const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <TitleSection title="Portfólio" />
      <div id="projects">
        {data.projects.map((project) => (
          <CardProject
            key={project.title}
            linkGitHub={project.links.github}
            title={project.title}
            desc={project.description}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
};
