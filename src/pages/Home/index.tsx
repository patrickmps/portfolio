import "./style.scss";
import Wave from "../../assets/wave.svg";
import Wave2 from "../../assets/wave2.svg";
import HomeSelfie from "../../assets/home-selfie.png";
import { FaAngleDown } from "react-icons/fa";

export const Home = () => {

  window.onscroll = () => ScrollArrowStop();
  function ScrollArrowStop() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if(scrolled < 90){
      document.getElementById("arrow-scroll")!.style.display = 'block';
    }else {
      document.getElementById("arrow-scroll")!.style.display = 'none';
    }
    
  }

  return (
    <section className="home" id="home">
      <div>
        <h1>Patrick Mota</h1>
        <div>
          <h2>Dev Front-end</h2>
          <button onClick={() => window.location.href = '#contact'}>Entre em contato</button>
        </div>
      </div>
      <div className="wave-container">
        <img src={HomeSelfie} alt="" />
        <img src={Wave} alt="" className="wave" />
        <img src={Wave2} alt="" className="wave-2" />
      </div>
      <FaAngleDown id="arrow-scroll" />
    </section>
  );
};
