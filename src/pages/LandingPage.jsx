import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedin, FaPlus, FaMinus, FaCheck, FaRegCopy } from 'react-icons/fa6';
import { projects, experience, certifications } from '../data/portfolio';
import portrait from '../assets/foto-profesional.jpeg';
import '../styles/LandingPage.css';
import '../styles/InterfaceStudy.css';
import '../styles/Theme.css';
import ThemePicker from '../components/ThemePicker';
const email = 'alexanderd.tejeda.08@gmail.com';
const github = 'https://github.com/AlexanderTejeda';
const cv = '/cv/Alexander_Delgado_Tejeda_CV.pdf';
const cvEnglish = '/cv/Alexander_Delgado_Tejeda_CV_English.pdf';
const navigation = [['proyectos', 'Proyectos'], ['enfoque', 'Enfoque'], ['experiencia', 'Experiencia']];
function Tags({
  items
}) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
function ProjectCard({
  project,
  index
}) {
  return <article className={`work-card ${project.color}`}>
    <a className="work-image-link" href={`${github}/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Explorar código de ${project.title} en GitHub`}>
      <div className="work-preview">
        <div className="preview-top"><span><i /><i /><i /></span><span>{project.title.toLowerCase().replaceAll(' ', '.')}</span><FaArrowUpRightFromSquare /></div>
        <img src={project.image} alt={`Interfaz de ${project.title}`} loading="lazy" decoding="async" width="1024" height="768" />
      </div>
      <span className="preview-action">Explorar código <FaArrowUpRightFromSquare /></span>
    </a>
    <div className="work-meta"><span>{project.label}</span><span>0{index + 1}</span></div>
    <div className="work-title"><h3>{project.title}</h3><a href={`${github}/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`Repositorio ${project.title}`}><FaGithub /></a></div>
    <p className="work-subtitle">{project.description}</p>
    <p className="work-description">{project.summary}</p>
    <Tags items={project.stack} />
    <details className="project-details"><summary>Dentro del proyecto <FaPlus className="plus" /><FaMinus className="minus" /></summary><div><span className="detail-label">{project.focus}</span><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><a className="text-link" href={`${github}/${project.repo}`} target="_blank" rel="noreferrer">Ver implementación en GitHub <FaArrowUpRightFromSquare /></a></div></details>
  </article>;
}
function DemoPreview({ mode, sizing = false }) {
  return <div className={`demo-window ${mode}${sizing ? " demo-sizer" : ""}`} aria-hidden={sizing || undefined}>
        <div className="demo-toolbar"><span><i /><i /><i /></span><span>studio / collection</span><span>↗</span></div>
        <div className="demo-body"><div className="demo-nav"><strong>forma®</strong><span>OBJETOS COTIDIANOS</span><span>☰</span></div><div className="demo-product"><span className="demo-index">ESTUDIO Nº 01</span><div className="sculpture"><div className="sculpture-ring" /><div className="sculpture-base" /></div><span className="demo-caption">Menos, pero mejor.</span></div><div className="demo-bottom"><div><strong>Diseño con intención.</strong><span>Una exploración de UI responsive.</span></div><span className="demo-round">↗</span></div></div>
      </div>;
}
function InterfaceStudy() {
  const [mode, setMode] = useState('desktop');
  return <div className="interface-study">
    <div className="study-top"><span><span className="live-dot" /> INTERFACE LAB / 001</span><span>REACT · UI</span></div>
    <div className="study-grid">
      <div className="study-note">Ideas claras.<br />Interfaces que<br /><em>se sienten bien.</em><span className="sketch-arrow">↘</span></div>
      <div className="demo-stage">
        <DemoPreview mode="desktop" sizing />
        <DemoPreview mode="mobile" sizing />
        <DemoPreview mode={mode} />
      </div>
      <span className="study-caption">COMPONENTES → EXPERIENCIAS</span>
    </div>
    <div className="study-controls"><span>Una idea. Distintas pantallas.</span><div role="group" aria-label="Vista de la demostración responsive"><button type="button" aria-pressed={mode === 'desktop'} onClick={() => setMode('desktop')}>Desktop</button><button type="button" aria-pressed={mode === 'mobile'} onClick={() => setMode('mobile')}>Mobile</button></div></div>
  </div>;
}
export default function LandingPage() {
  const [filter, setFilter] = useState('Destacados');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [copyState, setCopyState] = useState('idle');
  const copyTimeout = useRef(null);
  const menuButton = useRef(null);
  const visibleProjects = filter === 'Destacados' ? projects.slice(0, 3) : projects.filter(project => project.category === filter);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, {
      rootMargin: '-15% 0px -55% 0px'
    });
    navigation.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      observer.disconnect();
      clearTimeout(copyTimeout.current);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    clearTimeout(copyTimeout.current);
    copyTimeout.current = setTimeout(() => setCopyState('idle'), 4000);
  }
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header"><div className="header-inner">
      <a className="wordmark" href="#inicio" aria-label="Alexander Tejeda, inicio">alex<span>↗</span><small>FRONTEND ENGINEER</small></a>
      <ThemePicker />
      <button className="menu-toggle" type="button" ref={menuButton} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Cerrar' : 'Menú'} {menuOpen ? <FaMinus /> : <FaPlus />}</button>
      <nav id="main-navigation" className={menuOpen ? 'main-navigation is-open' : 'main-navigation'} aria-label="Navegación principal" onKeyDown={event => {
          if (event.key === 'Escape') {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}>
        {navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <FaArrowUpRightFromSquare /></a>
      </nav>
    </div></header>

    <main id="contenido">
      <section className="intro section-wrap" id="inicio" aria-labelledby="intro-title">
        <div className="intro-top"><span className="eyebrow"><span className="live-dot" /> ALEXANDER DELGADO TEJEDA</span><span className="location">MÉXICO · COLABORACIÓN REMOTA</span></div>
        <div className="intro-layout"><div className="intro-copy"><h1 id="intro-title">Buen código.<br />Mejores<br /><span>experiencias.</span></h1><p>Soy <strong>Frontend Engineer.</strong> Construyo interfaces rápidas, accesibles y pensadas para las personas. De aplicaciones con React a experiencias e-commerce que conectan UX y negocio.</p><div className="intro-actions"><a className="button button-dark" href="#proyectos">Explorar proyectos <FaArrowDown /></a><a className="text-link" href={cv} target="_blank" rel="noreferrer">Ver mi CV <FaArrowUpRightFromSquare /></a></div><div className="intro-stack"><span>MI STACK PRINCIPAL</span><p>React <b>✳</b> Next.js <b>✳</b> TypeScript</p></div></div><InterfaceStudy /></div>
        <div className="intro-footer"><span>Frontend engineering / E-commerce / UX & CRO</span><a href="#proyectos">SCROLL PARA EXPLORAR <FaArrowDown /></a></div>
      </section>

      <div className="context-strip"><div className="section-wrap"><span>EXPERIENCIA EN</span><strong>Weecom<span>E-COMMERCE & CRO</span></strong><strong>Softtek<span>PROYECTO WALMART</span></strong><strong>Slim Company<span>PRODUCTO & FRONTEND</span></strong><span className="strip-note">Distintos contextos.<br />El mismo cuidado por la interfaz.</span></div></div>

      <section className="work-section section-wrap" id="proyectos" aria-labelledby="work-heading"><div className="section-heading"><div><span className="eyebrow">01 / TRABAJO SELECCIONADO</span><h2 id="work-heading">Ideas que ya<br />puedes <em>explorar.</em></h2></div><p>Proyectos personales, decisiones de interfaz<br className="desktop-break" /> y código abierto. Mira cómo están construidos.</p></div>
        <div className="work-filter-row"><div className="filters" role="group" aria-label="Filtrar proyectos">{['Destacados', 'E-commerce', 'Aplicaciones', 'Experimentos'].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="result-count" role="status">{visibleProjects.length} proyectos</span></div>
        <div className="work-grid">{visibleProjects.map(project => <ProjectCard project={project} index={projects.indexOf(project)} key={project.id} />)}</div>
        <div className="work-bottom"><span>El código también cuenta la historia.</span><a className="text-link" href={`${github}?tab=repositories`} target="_blank" rel="noreferrer">Todos los repositorios <FaArrowUpRightFromSquare /></a></div>
      </section>

      <section className="approach-section" id="enfoque" aria-labelledby="approach-heading"><div className="section-wrap"><div className="section-heading"><div><span className="eyebrow">02 / MI ENFOQUE</span><h2 id="approach-heading">La interfaz es donde<br />todo <em>conecta.</em><span className="orange-star">✳</span></h2></div><p>Frontend como especialidad.<br />Visión de producto en cada decisión.</p></div><div className="capabilities">
        {[['01', 'Frontend engineering', 'Interfaces que se sienten naturales.', 'React, Next.js y TypeScript para construir componentes reutilizables, layouts responsive y experiencias con atención a accesibilidad y web performance.', ['React', 'Next.js', 'TypeScript', 'HTML & CSS']], ['02', 'E-commerce & CRO', 'Cada interacción tiene una intención.', 'Storefronts en Shopify, páginas de producto, colecciones y carritos. Implementación de diseños de Figma y experimentos A/B para trabajar sobre la fricción de compra.', ['Shopify', 'Liquid', 'Figma', 'UX & CRO']], ['03', 'Ingeniería de producto', 'Una buena interfaz necesita una buena base.', 'Mi experiencia full stack me permite entender APIs, datos e integraciones, colaborar con backend y acompañar el software hasta su entrega.', ['REST APIs', 'Node.js', 'C# / .NET', 'Git & CI/CD']]].map(([number, title, subtitle, text, tags]) => <article className="capability" key={number}><span className="capability-number">{number} /</span><h3>{title}</h3><h4>{subtitle}</h4><p>{text}</p><Tags items={tags} /></article>)}
      </div><div className="approach-footnote"><span className="live-dot" /> Del diseño al componente. Del componente a la experiencia.</div></div></section>

      <section className="experience-section section-wrap" id="experiencia" aria-labelledby="experience-heading"><div className="experience-intro"><span className="eyebrow">03 / TRAYECTORIA</span><h2 id="experience-heading">Experiencia que<br />da <em>perspectiva.</em></h2><p>Del desarrollo de sistemas internos a aplicaciones empresariales y e-commerce. Una evolución hacia mi especialización en frontend.</p><a className="text-link" href={cv} target="_blank" rel="noreferrer">CV en español <FaArrowUpRightFromSquare /></a><a className="text-link" href={cvEnglish} target="_blank" rel="noreferrer" lang="en">Resume in English <FaArrowUpRightFromSquare /></a></div><div className="timeline">{experience.map(job => <article className="job" key={job.company}><div className="job-top"><span>{job.period}</span>{job.current && <span className="current-label"><span className="live-dot" /> ACTUAL</span>}</div><h3>{job.company}</h3><p className="job-role">{job.role} <span> / {job.specialty}</span></p><p className="job-description">{job.text}</p><ul className="job-bullets">{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><Tags items={job.stack} /></article>)}<details className="earlier-experience"><summary>Los primeros pasos <FaPlus className="plus" /><FaMinus className="minus" /></summary><div><h3>LSR Distribuidor</h3><span>Web Developer & IT Support · Sep. 2023 — Abr. 2024</span><p>Sitios web con WordPress, Elementor, HTML y CSS, junto con soporte TI, redes y mantenimiento de equipos.</p><h3>Robuspack</h3><span>Full Stack Developer Intern · Ago. 2023 — Ene. 2024</span><p>Sistema interno de inventarios con PHP, JavaScript, HTML, CSS y Bootstrap durante mis prácticas profesionales.</p></div></details></div></section>

      <section className="about-section section-wrap" aria-labelledby="about-heading"><div className="portrait-wrap"><img src={portrait} alt="Alexander Delgado Tejeda" loading="lazy" decoding="async" width="1024" height="1024" /><span>EL HUMANO DETRÁS DEL CÓDIGO ↗</span></div><div className="about-copy"><span className="eyebrow">04 / UN POCO MÁS DE MÍ</span><h2 id="about-heading">Curiosidad técnica.<br /><em>Criterio humano.</em></h2><p>Soy Alexander, Ingeniero en Sistemas Computacionales en Cuautitlán Izcalli, México. Me interesa cómo una decisión de diseño se convierte en código y cómo ese código cambia la experiencia de una persona.</p><p>Mi trabajo combina desarrollo frontend, atención a UX y contexto de negocio. Sigo aprendiendo y construyendo proyectos para poner esas ideas a prueba.</p><div className="education"><div><strong>Ingeniería en Sistemas Computacionales</strong><span>TESCI · Julio 2019 — Marzo 2024</span></div><div><strong>Técnico en Informática</strong><span>CONALEP Ing. Bernardo Quintana Arrioja · 2016 — 2019</span></div></div><div className="about-links"><a className="text-link" href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn <FaArrowUpRightFromSquare /></a><a className="text-link" href={github} target="_blank" rel="noreferrer"><FaGithub /> GitHub <FaArrowUpRightFromSquare /></a></div></div></section>

      <section className="learning-section section-wrap" aria-labelledby="learning-heading"><details className="learning-details"><summary><span><span className="eyebrow">APRENDIZAJE CONTINUO</span><span id="learning-heading" className="learning-title">Formación que se puede consultar.</span></span><span className="learning-toggle"><span>{certifications.length} certificados</span><FaPlus className="plus" /><FaMinus className="minus" /></span></summary><div className="certificate-grid">{certifications.map(([title, issuer, file]) => <a key={file} href={`/certificados/${file}.pdf`} target="_blank" rel="noreferrer"><span><strong>{title}</strong><small>{issuer}</small></span><FaArrowUpRightFromSquare /></a>)}<a href="/certificados/carta-merito-ccna-switching.pdf" target="_blank" rel="noreferrer"><span><strong>Carta de mérito · Switching & Routing</strong><small>Cisco Networking Academy</small></span><FaArrowUpRightFromSquare /></a><a href="/certificados/carta-merito-ccna-empresariales.pdf" target="_blank" rel="noreferrer"><span><strong>Carta de mérito · Redes Empresariales</strong><small>Cisco Networking Academy</small></span><FaArrowUpRightFromSquare /></a></div></details></section>

      <section className="contact-section" id="contacto" aria-labelledby="contact-heading"><div className="section-wrap"><div className="contact-top"><span className="eyebrow">05 / SIGUIENTE CONVERSACIÓN</span><span>MÉXICO ↗ REMOTO</span></div><h2 id="contact-heading">Tu siguiente idea.<br /><em>Hagámosla tangible.</em></h2><div className="contact-bottom"><p>¿Un equipo frontend, un producto web o una<br className="desktop-break" /> experiencia e-commerce? Hablemos.</p><a className="button button-dark" href={`mailto:${email}`}>Cuéntame tu proyecto <FaArrowUpRightFromSquare /></a></div><div className="email-row"><a href={`mailto:${email}`}>{email}</a><button type="button" onClick={copyEmail} aria-label="Copiar correo electrónico">{copyState === 'copied' ? <FaCheck /> : <FaRegCopy />}</button><a className="linkedin-link" href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer">LinkedIn <FaArrowUpRightFromSquare /></a><span role="status">{copyState === 'copied' ? 'Correo copiado' : copyState === 'error' ? 'Puedes seleccionar y copiar el correo.' : ''}</span></div></div></section>
    </main>
    <footer className="site-footer section-wrap"><a className="wordmark" href="#inicio" aria-label="Volver al inicio">alex<span>↗</span></a><span>© {new Date().getFullYear()} Alexander Delgado Tejeda</span><div><a href={github} target="_blank" rel="noreferrer">GitHub <FaArrowUpRightFromSquare /></a><a href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer">LinkedIn <FaArrowUpRightFromSquare /></a><a href="#inicio">Volver arriba <FaArrowRight className="up-arrow" /></a></div></footer>
  </>;
}
