import "./style.scss";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const ScocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href="https://github.com/patrickmps" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/patrickmps/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://t.me/trick_mps" target="_blank">
        <FaTelegramPlane />
      </a>
    </div>
  );
};
