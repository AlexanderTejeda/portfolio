import "../styles/Projects.css";
import { FaGithub, FaCss3,FaNodeJs, FaReact } from 'react-icons/fa';
import { AiOutlinePython, AiOutlineHtml5 } from 'react-icons/ai';
import { FaSquareJs } from 'react-icons/fa6';
import { BiLogoFirebase } from 'react-icons/bi';
import chatbotImg from "../assets/chatbot.webp";
import mondeImg from "../assets/monde.webp";
import scrapperImg from "../assets/webscraping.webp";
import summaryImg from "../assets/summarizer.webp";

const Projects = () => {
 
const projects = [
  {
    title: "Chatbot Demo",
    description:
      "Chatbot web interactivo creado desde cero con HTML, CSS y JavaScript, conectado a un backend en Flask. Su endpoint personalizado permite generar respuestas inteligentes y mantener una experiencia conversacional natural y fluida.",
    image: chatbotImg,
    link: "#",
    github: "https://github.com/AlexanderTejeda/chatbot-demo",
    tech: [<AiOutlinePython />, <FaSquareJs />, <AiOutlineHtml5 />, <FaCss3 />],
  },
  {
    title: "Tienda web con carrito y Pasarela de pago simulada",
    description:
      "Tienda en línea moderna creada con React y Firebase. Ofrece un flujo de compra completo con carrito dinámico y una experiencia de pago simulada que emula un entorno real de comercio electrónico.",
    image: mondeImg,
    link: "#",
    github: "https://github.com/AlexanderTejeda/monde-challenge",
    tech: [<BiLogoFirebase />, <FaNodeJs />,<FaReact />, <FaSquareJs />, <AiOutlineHtml5 />, <FaCss3 />],
  },
  {
    title: "Data Scrapper",
    description:
      "Aplicación web que recopila en tiempo real las últimas publicaciones de Hacker News mediante scraping con Python y Flask. Los resultados se muestran organizados en una interfaz moderna construida con React.",
    image: scrapperImg,
    link: "#",
    github: "https://github.com/AlexanderTejeda/data_scrapper",
    tech: [<AiOutlinePython />, <FaReact />, <FaSquareJs />, <AiOutlineHtml5 />, <FaCss3 />],
  },
  {
    title: "Resumidor de Textos con IA",
    description:
      "Herramienta web que permite resumir textos largos en segundos utilizando IA mediante @xenova/transformers. Desarrollada con Node.js y Express, con un frontend en JS, HTML y CSS que ofrece una experiencia simple y directa para el usuario.",
    image: summaryImg,
    link: "#",
    github: "https://github.com/AlexanderTejeda/endpoint-personalizado",
    tech: [<FaNodeJs />, <FaSquareJs />, <AiOutlineHtml5 />, <FaCss3 />],
  },
];

 return (
    <section className="projectsSection">
      <h2>Proyectos destacados</h2>
      <p className="sectionSubtitle">
        Algunos de los proyectos que he creado, mostrando cómo transformo ideas en aplicaciones web funcionales y dinámicas.
      </p>

      <div className="projectsGrid">
        {projects.map((proj, index) => (
          <article key={index} className="projectCard">
            <img src={proj.image} alt={proj.title} className="projectImage" />
            <div className="projectInfo">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="projectTech">
                {proj.tech.map((icon, i) => (
                  <span key={i} className="techIcon">
                    {icon}
                  </span>
                ))}
              </div>

              <div className="projectLinks">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectButton"
                >
                  Ver proyecto →
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubButton"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;