import { JSX } from "react";
import "./style.scss";

interface SkillProps {
  icon: JSX.Element;
  name: string;
}

export const CardSkill = ({ icon, name }: SkillProps) => {
  return (
    <div className="card-skill">
      {icon}
      <p>{name}</p>
    </div>
  );
};
