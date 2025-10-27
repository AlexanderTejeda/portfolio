import { FaWhatsapp } from "react-icons/fa";
import "../styles/FloatingContactButton.css";


const FloatingContactButton = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "525583845009"; 
  const message = encodeURIComponent("¡Hola Alexander! Vi tu portafolio y me gustaría contactarte.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-contact"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default FloatingContactButton;