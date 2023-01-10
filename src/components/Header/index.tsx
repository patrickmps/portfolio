import "./style.scss";
import Logo from "../../assets/logo.svg";
import { useEffect } from "react";

export const Header = () => {
  
  useEffect(() => {
    const hamburguerMenu = document.querySelector(".hamburguer-menu");
    const navMenu = document.querySelector(".nav-menu");

    document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
      hamburguerMenu?.classList.remove("active");
      navMenu?.classList.remove("active");
    }));
  }), [];

  return (
    <header className="header-container">
      <img src={Logo} alt="" />

      <nav className="nav-menu">
        <ul>
          <li>
            <a className="nav-link" href="#home">home</a>
          </li>
          <li>
            <a className="nav-link" href="#about">sobre</a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">portfólio</a>
          </li>
          <li>
            <a className="nav-link" href="#contact">contato</a>
          </li>
        </ul>

        <div onClick={() => {
          const hamburguerMenu = document.querySelector(".hamburguer-menu");
          const navMenu = document.querySelector(".nav-menu");
          hamburguerMenu?.classList.toggle("active");
          navMenu?.classList.toggle("active");
        }} className="hamburguer-menu">
          <span id="bar"></span>
          <span id="bar"></span>
          <span id="bar"></span>
        </div>
      </nav>
    </header>
  );
};
