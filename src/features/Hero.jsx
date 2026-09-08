import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/foto-profesional.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import "../styles/Hero.css";


const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = ({ children }) => {

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/alexdtejeda/", '_blank', 'noopener,noreferrer');
    };

    return (
    <header className="hero">

        <section className="cardSide">
            <ProfileCard
                name="Alexander Tejeda"
                title="Desarrollador Web · Full Stack"
                handle="alexdtejeda"
                status="Disponible"
                contactText="Contáctame"
                avatarUrl={Avatar}
                showUserInfo={true}
                enableTilt={!prefersReducedMotion}
                enableMobileTilt={false}
                onContactClick={handleLinkedInClick}
            />
        </section>

        <section className="introductionSide">
            {children && (
                <nav className="heroNavigation" aria-label="Contenido del portafolio">
                    {children}
                </nav>
            )}
            <aside className="texside">
                <span className="heroEyebrow">Desarrollo web · Shopify · Full Stack</span>
                <h1>Desarrollo soluciones web que llevan tus ideas a producción</h1>
                <p>
                    Creo sitios, aplicaciones y funcionalidades a medida para negocios y tiendas
                    online. Trabajo con React, Node.js y Shopify Liquid para construir soluciones
                    rápidas, responsivas y listas para crecer.
                </p>
            </aside>

            <div className="heroActions">
                <a className="cvButton" href="/cv/Alexander_D_Tejeda_CV.pdf" target="_blank" rel="noreferrer">
                    <FaDownload aria-hidden="true" />
                    Ver CV
                </a>
                <div className="social-links" aria-label="Perfiles profesionales">
                    <a href="https://github.com/AlexanderTejeda" target="_blank" rel="noreferrer" aria-label="GitHub de Alexander Tejeda">
                        <FaGithub aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Alexander Tejeda">
                        <FaLinkedin aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>


    </header>
    );
}


export default Hero;
