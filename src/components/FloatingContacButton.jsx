import { FaLinkedin } from "react-icons/fa";
import "../styles/FloatingContactButton.css";


const FloatingContactButton = () => {

  return (
    <a
      href="https://www.linkedin.com/in/alexdtejeda/"
      className="floating-contact"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por LinkedIn"
    >
      <FaLinkedin className="linkedin-icon" />
    </a>
  );
};

export default FloatingContactButton;