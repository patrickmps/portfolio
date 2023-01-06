import './style.scss'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  
  return (
    <div className='header-container'>

      <img src={Logo} alt="" />
      <nav>
        <a href="#home">home</a>
        <a href="#about">sobre</a>
        <a href="#portfolio">portfólio</a>
        <a href="#contact">contato</a>
      </nav>

    </div>
  );
}