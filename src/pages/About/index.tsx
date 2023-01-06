import { CardSkill } from "../../components/CardSkill";
import "./style.scss";
import { DiJsBadge, DiCss3, DiHtml5, DiReact,DiSass } from "react-icons/di";
import { TitleSection } from "../../components/TitleSection";


export const About = () => {
  const skills = [
    {
      icon: <DiJsBadge color="#e0cd2d"/>,
      name: 'JavaScript'
    },
    {
      icon: <DiHtml5 color="#c04626"/>,
      name: 'HTML'
    },
    {
      icon: <DiCss3 color="#61dafb"/>,
      name: 'CSS'
    },
    {
      icon: <DiSass color="#bf4080"/>,
      name: 'Sass'
    },
    {
      icon: <DiReact color="#327eb8"/>,
      name: 'ReactJS'
    }
  ]

  return (
    <section className="about" id="about">
      <div id="content">
        <TitleSection title="Sobre mim"/>
        <h2>
          Olá! Eu sou <span>Patrick</span>...
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          alias ullam sit quae vero laboriosam est excepturi ipsa eius quis
          repellat animi quidem deserunt ducimus quam nesciunt voluptatum
          blanditiis esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          alias ullam sit quae vero laboriosam est excepturi ipsa eius quis
          repellat animi quidem deserunt ducimus quam nesciunt voluptatum
          blanditiis esse!
        </p>
      </div>
      <div id="skills">
        <TitleSection title="Tecnologias"/>
        <div id="skills-grid">
          {skills.map(skill =>  <CardSkill icon={skill.icon} name={skill.name} />)}
        
        </div>
      </div>
    </section>
  );
};
