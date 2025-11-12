import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { ContactTag } from "../../components/ContactTag";
import { TitleSection } from "../../components/TitleSection";
import "./style.scss";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <TitleSection title="Contato" />
      <p>
        Entre em contato através do e-mail ou LinkedIn. Irei responder o mais
        breve possível!
      </p>
      <div className="contacts">
        <ContactTag
          icon={<FaRegEnvelope />}
          text="patrick.motaps@gmail.com"
          btnType="clipboard"
        />
        <ContactTag
          icon={<FaLinkedin />}
          text="patrickmps"
          href="https://www.linkedin.com/in/patrickmps/"
        />
      </div>
    </section>
  );
};
