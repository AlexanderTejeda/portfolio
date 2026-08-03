import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaLayerGroup,
  FaPlug,
  FaStore,
  FaTimes,
} from "react-icons/fa";
import "../styles/Services.css";

const services = [
  {
    id: "desarrollo-web",
    icon: <FaCode />,
    title: "Desarrollo web a medida",
    summary: "Sitios y aplicaciones web construidos alrededor de las necesidades reales de tu negocio.",
    description:
      "Diseño y desarrollo soluciones web rápidas, responsivas y fáciles de mantener, desde una presencia profesional hasta herramientas internas con lógica personalizada.",
    deliverables: [
      "Sitios corporativos y portafolios",
      "Aplicaciones web con React",
      "Formularios, paneles y flujos personalizados",
      "Integración con APIs y bases de datos",
    ],
  },
  {
    id: "shopify",
    icon: <FaStore />,
    title: "Desarrollo Shopify",
    summary: "Implementaciones y mejoras técnicas para tiendas Shopify que necesitan más flexibilidad.",
    description:
      "Desarrollo sobre themes existentes o implemento nuevas secciones y funcionalidades con Liquid, JavaScript y CSS, respetando la identidad visual de la tienda.",
    deliverables: [
      "Secciones personalizadas y reutilizables",
      "Ajustes de producto, colección y carrito",
      "Corrección de errores y mejoras responsive",
      "Configuración e integración de aplicaciones",
    ],
  },
  {
    id: "landing-pages",
    icon: <FaLayerGroup />,
    title: "Landing pages",
    summary: "Páginas claras y rápidas para presentar servicios, campañas o productos.",
    description:
      "Transformo una idea o diseño en una landing page adaptable a cualquier pantalla, con una estructura enfocada en comunicar bien y facilitar el contacto.",
    deliverables: [
      "Implementación desde diseño o referencia",
      "Diseño responsive",
      "Formularios y llamadas a la acción",
      "Publicación y configuración básica",
    ],
  },
  {
    id: "integraciones-soporte",
    icon: <FaPlug />,
    title: "Integraciones y soporte",
    summary: "Ayuda técnica para conectar herramientas, resolver errores y mantener tu sitio al día.",
    description:
      "Trabajo sobre proyectos existentes para implementar mejoras puntuales, conectar servicios externos y resolver problemas sin que tengas que reconstruir todo desde cero.",
    deliverables: [
      "Integraciones con servicios y APIs",
      "Automatizaciones y funcionalidades puntuales",
      "Diagnóstico y corrección de errores",
      "Mantenimiento evolutivo por proyecto",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!selectedService) return undefined;

    closeRef.current?.focus({ preventScroll: true });
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        event.stopImmediatePropagation();
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape, true);
    return () => window.removeEventListener("keydown", closeOnEscape, true);
  }, [selectedService]);

  const getWhatsappUrl = (service) => {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER || "525583845009";
    const message = `Hola Alexander, vi tu portafolio y me interesa el servicio de ${service.title}.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="servicesSection">
      <div className="servicesHeading">
        <span className="servicesKicker">Cómo puedo ayudarte</span>
        <h2>Servicios de desarrollo</h2>
        <p className="sectionSubtitle">
          Soluciones web para lanzar una idea, mejorar un sitio existente o ampliar una tienda Shopify.
          Selecciona un servicio para conocer qué incluye.
        </p>
      </div>

      <div className="servicesGrid">
        {services.map((service) => (
          <button
            type="button"
            className="serviceCard"
            key={service.id}
            onClick={() => setSelectedService(service)}
            aria-haspopup="dialog"
          >
            <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
            <span className="serviceCardContent">
              <strong>{service.title}</strong>
              <span>{service.summary}</span>
            </span>
            <span className="serviceMore">
              Ver detalles <FaArrowRight aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <Motion.div
            className="serviceDialogBackdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedService(null);
            }}
          >
            <Motion.div
              className="serviceDialog"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
            >
              <button
                ref={closeRef}
                type="button"
                className="serviceDialogClose"
                onClick={() => setSelectedService(null)}
                aria-label="Cerrar detalle del servicio"
              >
                <FaTimes aria-hidden="true" />
              </button>

              <span className="serviceDialogIcon" aria-hidden="true">
                {selectedService.icon}
              </span>
              <h3 id="service-dialog-title">{selectedService.title}</h3>
              <p>{selectedService.description}</p>
              <h4>Puede incluir</h4>
              <ul>
                {selectedService.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a
                className="serviceContact"
                href={getWhatsappUrl(selectedService)}
                target="_blank"
                rel="noreferrer"
              >
                Cuéntame sobre tu proyecto <FaArrowRight aria-hidden="true" />
              </a>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
