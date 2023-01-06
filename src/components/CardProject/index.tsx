import "./style.scss";
import { DiGithubAlt, DiGithubFull } from "react-icons/di";

interface CardProjectProps {
  titulo: string;
  desc: string;
  img: string;
  linkGitHub: string;
}

export const CardProject = ({
  titulo,
  desc,
  img,
  linkGitHub,
}: CardProjectProps) => {
  return (
    <div className="card-project">
      <div>
        {img ? <img src={img} alt={`Imagem do projeto ${titulo}`} /> : null}
      </div>
      <h1>{titulo}</h1>
      <p>{desc}</p>
      <a href={linkGitHub} target="_blank">
        <button>
          <DiGithubAlt color="#fff" />
          <DiGithubFull color="#fff" />{" "}
        </button>
      </a>
    </div>
  );
};
