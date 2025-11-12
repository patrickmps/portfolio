import { JSX } from "react";
import { FaLink, FaRegClipboard } from "react-icons/fa";
import "./style.scss";

interface ContactTagProps {
  icon: JSX.Element;
  text: string;
  btnType?: string;
  href?: string;
}

export const ContactTag = ({ icon, text, btnType, href }: ContactTagProps) => {
  function Clipboard() {
    var copyText = document.getElementById("text-clipboard")?.textContent;
    navigator.clipboard.writeText(copyText!).then(
      () => {
        alert("Texto copiado: " + copyText);
      },
      () => {
        alert("Não foi possível copiar.");
      },
    );
  }

  return (
    <div className="contact-tag">
      <span>
        {icon}
        <p className="p-tag" id="text-clipboard">
          {text}
        </p>
      </span>
      {btnType === "clipboard" ? (
        <a onClick={Clipboard}>
          <FaRegClipboard />
        </a>
      ) : (
        <a href={href} target="_blank">
          <FaLink />
        </a>
      )}
    </div>
  );
};
