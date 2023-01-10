import { ContactTag } from "../../components/ContactTag";
import { TitleSection } from "../../components/TitleSection";
import "./style.scss";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <TitleSection title="Contato" />
      <p>
        Entre em contato através do e-mail ou Linkedin, irei responder o mais
        breve possível! Caso queira ter uma conversa mais informal é só me
        chamar no Telegram.
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
