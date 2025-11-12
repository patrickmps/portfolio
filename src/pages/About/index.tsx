import {
  DiCss3,
  DiDocker,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiSass,
} from "react-icons/di";
import {
  SiExpo,
  SiFigma,
  SiGraphql,
  SiJest,
  SiTypescript,
} from "react-icons/si";
import { CardSkill } from "../../components/CardSkill";
import { TitleSection } from "../../components/TitleSection";
import "./style.scss";

export const About = () => {
  const skills = [
    {
      icon: <DiReact color="#61dafb" />,
      name: "React Native",
    },
    {
      icon: <SiExpo color="#000020" />,
      name: "Expo",
    },
    {
      icon: <DiReact color="#61dafb" />,
      name: "React",
    },
    {
      icon: <SiTypescript color="#3178c6" />,
      name: "TypeScript",
    },
    {
      icon: <DiJsBadge color="#e0cd2d" />,
      name: "JavaScript",
    },
    {
      icon: <DiNodejsSmall color="#339933" />,
      name: "Node.js",
    },
    {
      icon: <SiGraphql color="#e10098" />,
      name: "GraphQL",
    },
    {
      icon: <DiPostgresql color="#336791" />,
      name: "PostgreSQL",
    },
    {
      icon: <DiDocker color="#2496ed" />,
      name: "Docker",
    },
    {
      icon: <SiJest color="#c21325" />,
      name: "Jest",
    },
    {
      icon: <SiFigma color="#f24e1e" />,
      name: "Figma",
    },
    {
      icon: <DiHtml5 color="#c04626" />,
      name: "HTML5",
    },
    {
      icon: <DiCss3 color="#327eb8" />,
      name: "CSS3",
    },
    {
      icon: <DiSass color="#bf4080" />,
      name: "Sass",
    },
  ];

  return (
    <section className="about" id="about">
      <div id="content">
        <TitleSection title="Sobre mim" />
        <h2>
          Olá! Eu sou <span>Patrick Mota</span>...
        </h2>
        <p>
          desenvolvedor Mobile com foco em React Native e experiência em
          projetos de acessibilidade, gestão de vendas e controle de estoque.
          Formado em Sistemas de Informação pela UESB, já atuei em equipes
          acadêmicas, empresa júnior e freelances, sempre buscando criar
          soluções intuitivas, acessíveis e escaláveis.
        </p>
        <p>
          Perfil colaborativo, curioso e em constante evolução técnica, com
          sólidos conhecimentos em TypeScript, React, React Native, Expo,
          Node.js e integração de APIs.
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
