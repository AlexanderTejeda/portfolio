import {
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaBuilding,
  FaCode,
  FaGraduationCap,
  FaStore,
} from "react-icons/fa6";
import "../styles/ProfessionalProfile.css";

const experience = [
  {
    company: "Weecom",
    role: "CRO & Shopify Developer",
    period: "Abr. 2026 - Actualidad",
    icon: <FaStore />,
    summary:
      "Desarrollo y personalizo experiencias de e-commerce para múltiples marcas, desde themes y componentes hasta integraciones y experimentos orientados a conversión.",
    highlights: ["Shopify Liquid", "JavaScript", "Figma", "CRO & A/B testing"],
  },
  {
    company: "Softtek",
    role: "Software Engineer / Front-End Developer",
    period: "Nov. 2025 - Feb. 2026",
    icon: <FaBuilding />,
    summary:
      "Participé en una plataforma interna para Walmart, creando interfaces en React e integrándolas con servicios REST dentro de un entorno enterprise.",
    highlights: ["React", "Spring Boot", "Azure", "CI/CD & GitOps"],
  },
  {
    company: "Slim Company",
    role: "Desarrollador Full Stack",
    period: "Abr. 2024 - Jul. 2025",
    icon: <FaCode />,
    summary:
      "Construí sistemas de facturación, plataformas de productos, microservicios, automatizaciones y herramientas para inventario, cubriendo web, backend y mobile.",
    highlights: ["React + Vite", "Node.js", "PostgreSQL", "C# & Flutter"],
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["JavaScript ES6+", "React", "Vite", "HTML5", "CSS3", "Shopify Liquid"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "C#", "Python", "APIs REST", "Microservicios"],
  },
  {
    title: "Datos & entrega",
    items: ["PostgreSQL", "SQL", "Git", "Azure", "CI/CD", "GitOps"],
  },
];

const ProfessionalProfile = () => (
  <section className="profileSection">
    <div className="profileHeading">
      <span className="profileKicker">
        <FaBriefcase aria-hidden="true" /> Perfil profesional
      </span>
      <h2>Experiencia que conecta tecnología y negocio</h2>
      <p className="sectionSubtitle">
        He trabajado en producto interno, consultoría enterprise y e-commerce activo.
        Mi fortaleza está en entender el problema completo y llevarlo a una solución
        funcional, mantenible y orientada a resultados.
      </p>
    </div>

    <div className="experienceGrid">
      {experience.map((job) => (
        <article className="experienceCard" key={`${job.company}-${job.role}`}>
          <div className="experienceIcon" aria-hidden="true">{job.icon}</div>
          <div className="experienceBody">
            <span className="experiencePeriod">{job.period}</span>
            <h3>{job.role}</h3>
            <p className="experienceCompany">{job.company}</p>
            <p className="experienceSummary">{job.summary}</p>
            <ul className="experienceTags" aria-label={`Tecnologías utilizadas en ${job.company}`}>
              {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>

    <div className="profileLower">
      <div className="stackPanel">
        <div className="panelTitle">
          <FaCode aria-hidden="true" />
          <h3>Stack profesional</h3>
        </div>
        <div className="stackGroups">
          {stackGroups.map((group) => (
            <div className="stackGroup" key={group.title}>
              <h4>{group.title}</h4>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="educationPanel">
        <div className="panelTitle">
          <FaGraduationCap aria-hidden="true" />
          <h3>Formación</h3>
        </div>
        <p><strong>Ingeniería en Sistemas Computacionales</strong></p>
        <p>Tecnológico de Estudios Superiores de Cuautitlán Izcalli · 2019-2024</p>
        <a href="/cv/Alexander_Delgado_Tejeda_CV.pdf" target="_blank" rel="noreferrer">
          CV completo <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default ProfessionalProfile;
