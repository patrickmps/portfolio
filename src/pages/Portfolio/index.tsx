import { CardProject } from "../../components/CardProject";
import { TitleSection } from "../../components/TitleSection";
import "./style.scss";

export const Portfolio = () => {
  const desc =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vel iusto voluptatum eos placeat nihil iure libero hic quis, optio quidem quo laborum esse deserunt asperiores perferendis! Nam, quas laudantium!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur vel iusto voluptatum eos placeat nihil iure libero hic quis, optio quidem quo laborum esse deserunt asperiores perferendis! Nam, quas laudantium!";
  return (
    <section className="portfolio" id="portfolio">
      <TitleSection title="Portfólio" />
      <div id="projects">
        <CardProject linkGitHub="" img="" desc={desc} titulo="Em breve"  />
      </div>
    </section>
  );
};
