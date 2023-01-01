import './style.scss'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  
  return (
    <div className='header-container'>

      <img src={Logo} alt="" />
      <nav>
        <a href="#">home</a>
        <a href="#">sobre</a>
        <a href="#">portfólio</a>
        <a href="#">contato</a>
      </nav>

    </div>
  );
}