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
export const experience = [{
  company: 'Weecom',
  role: 'Frontend Developer',
  specialty: 'E-commerce & CRO',
  period: 'Abr. 2026 — Actualidad',
  current: true,
  text: 'Desarrollo interfaces e-commerce en producción para múltiples marcas. Conecto propuestas de Figma, mejoras de UX y experimentación con su implementación frontend.',
  bullets: ['PDP, PLP, landing pages, carritos y componentes responsive con JavaScript y Liquid.', 'Análisis de funnels, fricciones de UX y pruebas A/B orientadas a mejorar la conversión.'],
  stack: ['JavaScript', 'Shopify', 'Liquid', 'Figma', 'CRO']
}, {
  company: 'Softtek',
  role: 'Frontend Software Engineer',
  specialty: 'Proyecto empresarial · Walmart',
  period: 'Nov. 2025 — Feb. 2026',
  text: 'Desarrollé y mantuve funcionalidades frontend con React para una aplicación empresarial de Walmart, colaborando con backend y QA.',
  bullets: ['Componentes reutilizables e integración con servicios backend y APIs.', 'Corrección de incidencias y soporte a despliegues con Git y CI/CD.'],
  stack: ['React', 'REST APIs', 'Git', 'CI/CD']
}, {
  company: 'Slim Company',
  role: 'Full Stack Developer',
  specialty: 'Frontend Focus',
  period: 'Abr. 2024 — Jul. 2025',
  text: 'Construí interfaces para facturación electrónica, gestión de productos y procesos internos. La base full stack que hoy respalda mi especialización frontend.',
  bullets: ['Interfaces React + Vite integradas con APIs en C#/.NET.', 'Aplicaciones con React, Node.js y PostgreSQL; experiencia complementaria con Qt/C++ y Flutter.'],
  stack: ['React', 'Vite', 'C# / .NET', 'PostgreSQL']
}];
export const certifications = [['Animaciones en CSS', 'Academia midu.dev · 2025', 'animaciones-en-css'], ['CSS desde Cero', 'Academia midu.dev · 2025', 'css-desde-cero'], ['HTML desde Cero', 'Academia midu.dev · 2025', 'html-desde-cero'], ['CSS3: Sin Fronteras', '2024', 'css3-sin-fronteras'], ['HTML5: Sin Fronteras', '2024', 'html5-sin-fronteras'], ['Ultimate GIT + GitHub', '2024', 'ultimate-git-github'], ['Scrum Fundamentals Certified', 'SCRUMstudy · 2026', 'scrum-fundamentals-certified'], ['Curso Intensivo de Model Context Protocol', 'midudev · 2026', 'model-context-protocol'], ['Desarrollo con IA: Programa con Agentes', 'MoureDev × BIG School · 2026', 'desarrollo-con-ia-programa-con-agentes'], ['CCNAv7: Introducción a Redes', 'Cisco Networking Academy · 2022', 'ccna-introduccion-a-redes'], ['CCNAv7: Switching, Routing & Wireless Essentials', 'Cisco Networking Academy · 2022', 'ccna-switching-routing-wireless'], ['CCNAv7: Redes Empresariales, Seguridad y Automatización', 'Cisco Networking Academy · 2023', 'ccna-redes-empresariales'], ['Cybersecurity Essentials', 'Cisco Networking Academy · 2022', 'cybersecurity-essentials']];
