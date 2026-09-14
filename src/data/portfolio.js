import monde from '../assets/monde.webp';
import lifeos from '../assets/lifeos.webp';
import scrapper from '../assets/webscraping.webp';
import chatbot from '../assets/chatbot.webp';
import summarizer from '../assets/summarizer.webp';
export const projects = [{
  id: 'monde',
  title: 'Monde Store',
  category: 'E-commerce',
  label: 'E-commerce · Proyecto personal',
  description: 'Del descubrimiento al carrito.',
  summary: 'Una tienda web con catálogo, carrito dinámico y un flujo de pago simulado. Una exploración de las interacciones que dan forma a una experiencia de compra.',
  image: monde,
  stack: ['React', 'Firebase', 'JavaScript'],
  repo: 'monde-challenge',
  color: 'peach',
  focus: 'Experiencia de compra',
  details: ['Catálogo de productos y carrito dinámico dentro de una interfaz React.', 'Flujo de pago simulado para explorar el recorrido completo de compra.', 'Integración con Firebase como parte de la aplicación.']
}, {
  id: 'lifeos',
  title: 'LifeOS',
  category: 'Aplicaciones',
  label: 'Producto digital · Open source',
  description: 'Tu día a día, en perspectiva.',
  summary: 'Finanzas, hábitos, actividad física y salud en una sola aplicación. Interfaces que organizan información personal y la conectan con servicios y datos.',
  image: lifeos,
  stack: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
  repo: 'LifeOs',
  color: 'lilac',
  focus: 'Interfaces y datos',
  details: ['Frontend con React, Tailwind y visualizaciones con Recharts.', 'API con Node.js y Express, persistencia con PostgreSQL y Prisma.', 'Autenticación JWT y validación de datos con Zod.']
}, {
  id: 'scrapper',
  title: 'Data Scrapper',
  category: 'Aplicaciones',
  label: 'Aplicación web · Datos',
  description: 'Información que se deja explorar.',
  summary: 'Publicaciones de Hacker News recopiladas con Python y presentadas en una interfaz React para facilitar su consulta.',
  image: scrapper,
  stack: ['React', 'Python', 'Flask'],
  repo: 'data_scrapper',
  color: 'sage',
  focus: 'Presentación de información',
  details: ['Recopilación de publicaciones de Hacker News con Python.', 'Servicio backend con Flask conectado a una interfaz React.', 'Presentación organizada del contenido recopilado.']
}, {
  id: 'chatbot',
  title: 'Chatbot Demo',
  category: 'Experimentos',
  label: 'Experimento · Interacción',
  description: 'Una interfaz para conversar.',
  summary: 'Interfaz conversacional construida con JavaScript y conectada a un endpoint en Flask.',
  image: chatbot,
  stack: ['JavaScript', 'HTML', 'CSS', 'Flask'],
  repo: 'chatbot-demo',
  color: 'sage',
  focus: 'Interacción conversacional',
  details: ['Interfaz de chat desarrollada con HTML, CSS y JavaScript.', 'Conexión con un endpoint personalizado en Flask para generar respuestas.']
}, {
  id: 'summarizer',
  title: 'Text Summarizer',
  category: 'Experimentos',
  label: 'Experimento · Herramienta web',
  description: 'Menos texto. Más contexto.',
  summary: 'Una herramienta para resumir textos con una interfaz sencilla y procesamiento mediante Transformers.',
  image: summarizer,
  stack: ['JavaScript', 'Node.js', 'Express'],
  repo: 'endpoint-personalizado',
  color: 'peach',
  focus: 'Herramientas de productividad',
  details: ['Interfaz en JavaScript, HTML y CSS para introducir texto y consultar su resumen.', 'Backend con Node.js, Express y @xenova/transformers.']
}];
export const experience = [
  {
    "company": "Weecom",
    "role": "Frontend Developer",
    "specialty": "Shopify · E-commerce & CRO",
    "period": "Abr. 2026 — Actualidad",
    "current": true,
    "text": "Desarrollo y optimizo tiendas Shopify en producción para distintas marcas de e-commerce. Mi trabajo combina implementación frontend, experiencia de usuario y experimentación: llevo diseños y propuestas de mejora a interfaces que acompañan todo el recorrido de compra.",
    "bullets": [
      "Desarrollo y personalizo temas con Liquid, JavaScript, HTML y CSS; construyo secciones reutilizables, páginas de producto y colecciones, landing pages y carritos.",
      "Traduzco diseños de Figma y propuestas de CRO en interfaces listas para producción, cuidando el comportamiento responsive, la usabilidad móvil y el rendimiento de la tienda.",
      "Identifico fricciones en recorridos de compra y embudos de conversión a partir de datos de comportamiento y e-commerce, en colaboración con las propuestas de UX.",
      "Diseño e implemento pruebas A/B para validar hipótesis sobre experiencia de usuario y conversión.",
      "Integro y configuro funcionalidades de suscripciones, paquetes de productos, reseñas, recompensas y experiencias de carrito."
    ],
    "stack": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML / CSS",
      "Figma",
      "Pruebas A/B",
      "CRO"
    ]
  },
  {
    "company": "Softtek",
    "role": "Frontend Software Engineer",
    "specialty": "Proyecto empresarial · Walmart US",
    "period": "Nov. 2025 — Feb. 2026",
    "text": "Participé en el desarrollo, mantenimiento y evolución de aplicaciones web en producción para un proyecto empresarial de Walmart US. Trabajé sobre funcionalidades existentes y nuevas interfaces, en coordinación con otros equipos de ingeniería.",
    "bullets": [
      "Desarrollé y mantuve funcionalidades frontend y componentes de interfaz reutilizables con React y JavaScript.",
      "Integré las aplicaciones con APIs y servicios backend, colaborando con ingenieros que trabajaban con Spring Boot.",
      "Investigué y corregí incidencias en funcionalidades de producción para mantener el comportamiento esperado de las aplicaciones.",
      "Apoyé liberaciones y flujos de integración y entrega continua dentro del entorno de ingeniería de Walmart.",
      "Trabajé con plataformas y herramientas internas como WCNP, KITT, Concord y Looper, además de flujos GitOps/ChatOps y pipelines de despliegue."
    ],
    "stack": [
      "React",
      "JavaScript",
      "REST APIs",
      "Git",
      "CI/CD",
      "GitOps / ChatOps"
    ]
  },
  {
    "company": "Slim Company",
    "role": "Full Stack Developer",
    "specialty": "Enfoque en frontend",
    "period": "Abr. 2024 — Jul. 2025",
    "text": "Trabajé en distintos productos internos y orientados a clientes, con énfasis en interfaces web con React. Participar también en integraciones, datos y aplicaciones de almacén me dio una base full stack para entender cómo se conecta el frontend con el resto del producto.",
    "bullets": [
      "Desarrollé el frontend de una plataforma de facturación electrónica con React y Vite, integrado con APIs en C#/.NET documentadas en Swagger.",
      "Contribuí a una plataforma de gestión de productos de e-commerce y análisis de competencia, con React en el frontend y Node.js en el backend.",
      "Me encargué del frontend en React de un sistema de gestión de tareas para equipos de marketing y diseño.",
      "Implementé integraciones y flujos de datos con Node.js, APIs REST y PostgreSQL.",
      "Participé en frontend y backend de un sistema de gestión de almacenes con Qt/C++, y en una aplicación Android con Flutter y Dart para consultar productos, escanear códigos de barras y acceder a información de inventario."
    ],
    "stack": [
      "React",
      "Vite",
      "Node.js",
      "C# / .NET",
      "REST APIs",
      "PostgreSQL",
      "Qt / C++",
      "Flutter"
    ]
  }
];
export const certifications = [['Animaciones en CSS', 'Academia midu.dev · 2025', 'animaciones-en-css'], ['CSS desde Cero', 'Academia midu.dev · 2025', 'css-desde-cero'], ['HTML desde Cero', 'Academia midu.dev · 2025', 'html-desde-cero'], ['CSS3: Sin Fronteras', '2024', 'css3-sin-fronteras'], ['HTML5: Sin Fronteras', '2024', 'html5-sin-fronteras'], ['Ultimate GIT + GitHub', '2024', 'ultimate-git-github'], ['Scrum Fundamentals Certified', 'SCRUMstudy · 2026', 'scrum-fundamentals-certified'], ['Curso Intensivo de Model Context Protocol', 'midudev · 2026', 'model-context-protocol'], ['Desarrollo con IA: Programa con Agentes', 'MoureDev × BIG School · 2026', 'desarrollo-con-ia-programa-con-agentes'], ['CCNAv7: Introducción a Redes', 'Cisco Networking Academy · 2022', 'ccna-introduccion-a-redes'], ['CCNAv7: Switching, Routing & Wireless Essentials', 'Cisco Networking Academy · 2022', 'ccna-switching-routing-wireless'], ['CCNAv7: Redes Empresariales, Seguridad y Automatización', 'Cisco Networking Academy · 2023', 'ccna-redes-empresariales'], ['Cybersecurity Essentials', 'Cisco Networking Academy · 2022', 'cybersecurity-essentials']];
