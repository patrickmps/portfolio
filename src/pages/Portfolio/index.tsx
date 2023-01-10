import { CardProject } from "../../components/CardProject";
import { TitleSection } from "../../components/TitleSection";
import portfolioImage from "../../assets/portfolio.jpg";
import "./style.scss";

export const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <TitleSection title="Portfólio" />
      <div id="projects">
        <CardProject linkGitHub="https://github.com/patrickmps/portfolio" img={portfolioImage} desc={"Em breve vários projetos para compor o portfólio."} titulo="Em breve"  />
      </div>
    </section>
  );
};
