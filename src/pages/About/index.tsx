import { CardSkill } from "../../components/CardSkill";
import "./style.scss";
import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiSass } from "react-icons/di";
import { TitleSection } from "../../components/TitleSection";

export const About = () => {
  const skills = [
    {
      icon: <DiJsBadge color="#e0cd2d" />,
      name: "JavaScript",
    },
    {
      icon: <DiHtml5 color="#c04626" />,
      name: "HTML",
    },
    {
      icon: <DiCss3 color="#327eb8" />,
      name: "CSS",
    },
    {
      icon: <DiSass color="#bf4080" />,
      name: "Sass",
    },
    {
      icon: <DiReact color="#61dafb" />,
      name: "ReactJS",
    },
  ];

  return (
    <section className="about" id="about">
      <div id="content">
        <TitleSection title="Sobre mim" />
        <h2>
          Olá! Eu sou <span>Patrick</span>...
        </h2>
        <p>
          conheci o mundo da programação através do curso de Sistemas de
          Informação e estou cada dia mais entusiasmado em me desenvolver nessa
          área. Atualmente a àrea de desenvolvimento web, é a que mais tem me
          despertado interesse.
        </p>
        <p>
          Estou em busca de oportunidades, para me desenvolver a cada dia nesse
          universo. Entre em contato e garanto que não vai faltar empenho e
          dedicação.
        </p>
      </div>
      <div id="skills">
        <TitleSection title="Tecnologias" />
        <div id="skills-grid">
          {skills.map((skill) => (
            <CardSkill key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
