import './style.scss';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const ScocialButtons = () => {
  return (
    <div className='social-buttons'>
      <FaGithub/>
      <FaLinkedin/>
      <FaInstagram/>
      <FaFacebook/>
    </div>
  );
}
