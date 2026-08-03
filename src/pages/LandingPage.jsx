import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Certifications from "../features/Certifications";
import ProfessionalProfile from "../features/ProfessionalProfile";
import Services from "../features/Services";
import DeckLauncher from "../components/DeckLauncher";
import {
  FaHtml5,
  FaNetworkWired,
  FaRobot,
  FaAward,
  FaBriefcase,
  FaCode,
  FaStore,
  FaBuilding,
  FaLayerGroup,
  FaPlug,
} from "react-icons/fa";
import chatbotImg from "../assets/chatbot.webp";
import mondeImg from "../assets/monde.webp";
import scrapperImg from "../assets/webscraping.webp";
import summaryImg from "../assets/summarizer.webp";
import "../styles/LandingPage.css";

const projectDeck = [chatbotImg, mondeImg, scrapperImg, summaryImg].map(
  (src) => <img key={src} src={src} alt="" loading="lazy" />
);

const certDeck = [
  <FaRobot key="ia" />,
  <FaHtml5 key="frontend" />,
  <FaNetworkWired key="redes" />,
  <FaAward key="merito" />,
];

const experienceDeck = [
  <FaStore key="ecommerce" />,
  <FaBuilding key="enterprise" />,
  <FaCode key="fullstack" />,
  <FaBriefcase key="experience" />,
];

const servicesDeck = [
  <FaCode key="web" />,
  <FaStore key="shopify" />,
  <FaLayerGroup key="landing" />,
  <FaPlug key="integrations" />,
];

const LandingPage = () => {
  return (
    <main className="perspective">
      <Hero>
        <DeckLauncher label="Servicios" deck={servicesDeck} offset={0}>
          <Services />
        </DeckLauncher>

        <DeckLauncher label="Proyectos" deck={projectDeck} offset={1}>
          <Projects />
        </DeckLauncher>

        <DeckLauncher label="Experiencia" deck={experienceDeck} offset={2}>
          <ProfessionalProfile />
        </DeckLauncher>

        <DeckLauncher label="Certificados" deck={certDeck} offset={3}>
          <Certifications />
        </DeckLauncher>
      </Hero>
    </main>
  );
};

export default LandingPage;
