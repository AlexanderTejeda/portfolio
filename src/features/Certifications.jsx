import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNetworkWired,
  FaShieldAlt,
  FaRobot,
  FaClipboardCheck,
  FaFilePdf,
  FaAward,
} from "react-icons/fa";
import "../styles/Certifications.css";

const CATEGORIES = [
  { id: "todas", label: "Todas" },
  { id: "ia", label: "IA & Agentes" },
  { id: "frontend", label: "Frontend" },
  { id: "redes", label: "Redes & Ciberseguridad" },
  { id: "metodologias", label: "Metodologías & Herramientas" },
];

const certifications = [
  {
    title: "Desarrollo con IA: Programa con Agentes",
    issuer: "MoureDev × BIG School",
    year: 2026,
    category: "ia",
    icon: <FaRobot />,
    file: "/certificados/desarrollo-con-ia-programa-con-agentes.pdf",
    featured: true,
  },
  {
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    year: 2026,
    category: "metodologias",
    icon: <FaClipboardCheck />,
    file: "/certificados/scrum-fundamentals-certified.pdf",
  },
  {
    title: "Animaciones en CSS",
    issuer: "Academia midu.dev",
    year: 2025,
    category: "frontend",
    icon: <FaCss3Alt />,
    file: "/certificados/animaciones-en-css.pdf",
  },
  {
    title: "CSS desde Cero",
    issuer: "Academia midu.dev",
    year: 2025,
    category: "frontend",
    icon: <FaCss3Alt />,
    file: "/certificados/css-desde-cero.pdf",
  },
  {
    title: "HTML desde Cero",
    issuer: "Academia midu.dev",
    year: 2025,
    category: "frontend",
    icon: <FaHtml5 />,
    file: "/certificados/html-desde-cero.pdf",
  },
  {
    title: "CSS3: Sin Fronteras",
    issuer: "Academia online",
    year: 2024,
    category: "frontend",
    icon: <FaCss3Alt />,
    file: "/certificados/css3-sin-fronteras.pdf",
  },
  {
    title: "HTML5: Sin Fronteras",
    issuer: "Academia online",
    year: 2024,
    category: "frontend",
    icon: <FaHtml5 />,
    file: "/certificados/html5-sin-fronteras.pdf",
  },
  {
    title: "Ultimate GIT + GitHub",
    issuer: "Academia online",
    year: 2024,
    category: "metodologias",
    icon: <FaGitAlt />,
    file: "/certificados/ultimate-git-github.pdf",
  },
  {
    title: "CCNAv7: Redes Empresariales, Seguridad y Automatización",
    issuer: "Cisco Networking Academy",
    year: 2023,
    category: "redes",
    icon: <FaNetworkWired />,
    file: "/certificados/ccna-redes-empresariales.pdf",
    letter: "/certificados/carta-merito-ccna-empresariales.pdf",
  },
  {
    title: "CCNAv7: Switching, Routing & Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: 2022,
    category: "redes",
    icon: <FaNetworkWired />,
    file: "/certificados/ccna-switching-routing-wireless.pdf",
    letter: "/certificados/carta-merito-ccna-switching.pdf",
  },
  {
    title: "CCNAv7: Introducción a Redes",
    issuer: "Cisco Networking Academy",
    year: 2022,
    category: "redes",
    icon: <FaNetworkWired />,
    file: "/certificados/ccna-introduccion-a-redes.pdf",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    year: 2022,
    category: "redes",
    icon: <FaShieldAlt />,
    file: "/certificados/cybersecurity-essentials.pdf",
  },
];

const meritLetters = certifications.filter((c) => c.letter).length;

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const visible =
    activeCategory === "todas"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  const countFor = (id) =>
    id === "todas"
      ? certifications.length
      : certifications.filter((c) => c.category === id).length;

  return (
    <section className="certsSection">
      <h2>Certificaciones</h2>
      <p className="sectionSubtitle">
        Formación continua y verificable: desde redes Cisco hasta desarrollo con
        agentes de IA. Toca cualquier credencial para ver el certificado original.
      </p>

      <div className="certsStats">
        <div className="certsStat">
          <span className="certsStatNumber">{certifications.length}</span>
          <span className="certsStatLabel">Certificaciones</span>
        </div>
        <div className="certsStat">
          <span className="certsStatNumber">{CATEGORIES.length - 1}</span>
          <span className="certsStatLabel">Áreas de especialización</span>
        </div>
        <div className="certsStat">
          <span className="certsStatNumber">{meritLetters}</span>
          <span className="certsStatLabel">Cartas de mérito Cisco</span>
        </div>
      </div>

      <div className="certsFilters" role="tablist" aria-label="Filtrar certificaciones">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`certsFilter ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
            <span className="certsFilterCount">{countFor(cat.id)}</span>
          </button>
        ))}
      </div>

      <motion.div className="certsGrid" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((cert) => (
            <motion.article
              key={cert.title}
              className={`certCard ${cert.featured ? "featured" : ""}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              {cert.featured && <span className="certBadge">Nuevo</span>}
              <div className="certIcon" aria-hidden="true">{cert.icon}</div>
              <div className="certInfo">
                <h3>{cert.title}</h3>
                <p className="certIssuer">{cert.issuer}</p>
                <div className="certMeta">
                  <span className="certYear">{cert.year}</span>
                  <a
                    className="certView"
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver certificado de ${cert.title} (PDF)`}
                  >
                    <FaFilePdf aria-hidden="true" /> Ver certificado
                  </a>
                  {cert.letter && (
                    <a
                      className="certLetter"
                      href={cert.letter}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Carta de mérito firmada por el instructor"
                      aria-label={`Carta de mérito de ${cert.title} (PDF)`}
                    >
                      <FaAward aria-hidden="true" /> Carta de mérito
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Certifications;
