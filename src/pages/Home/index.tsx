import "./style.scss";
import Wave from "../../assets/wave.svg";
import Wave2 from "../../assets/wave2.svg";
import HomeSelfie from "../../assets/home-selfie.png";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div>
        <h1>Patrick Mota</h1>
        <div>
          <h2>Dev Front-end</h2>
          <button>Entre em contato</button>
        </div>
      </div>
      <div className="wave-container">
        <img src={HomeSelfie} alt="" />
        <img src={Wave} alt="" className="wave" />
        <img src={Wave2} alt="" className="wave-2" />
      </div>
    </section>
  );
};
