import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Certifications from "../features/Certifications";
import DeckLauncher from "../components/DeckLauncher";
import { FaHtml5, FaNetworkWired, FaRobot, FaAward } from "react-icons/fa";
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

const LandingPage = () => {
  return (
    <main className="perspective">
      <Hero />

      <DeckLauncher label="Proyectos" deck={projectDeck} offset={0}>
        <Projects />
      </DeckLauncher>

      <DeckLauncher label="Certificados" deck={certDeck} offset={1}>
        <Certifications />
      </DeckLauncher>
    </main>
  );
};

export default LandingPage;
