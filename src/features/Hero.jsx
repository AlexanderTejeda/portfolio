import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/foto-profesional.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import "../styles/Hero.css";


const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {

    const handleWhatsappClick = () => {
        const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "525583845009";
        const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || "¡Hola Alexander! Vi tu portafolio y me gustaría contactarte.";
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    
    return (
    <header className="hero">

        <section className="cardSide">
            <ProfileCard
                name="Alexander Tejeda"
                title="Software Engineer · Full Stack"
                handle="alexdtejeda"
                status="Disponible"
                contactText="Contáctame"
                avatarUrl={Avatar}
                showUserInfo={true}
                enableTilt={!prefersReducedMotion}
                enableMobileTilt={false}
                onContactClick={handleWhatsappClick}
            />
        </section>

        <section className="introductionSide">
            <aside className="texside">
                <span className="heroEyebrow">Software Engineer · Full-Stack Developer</span>
                <h1>Convierto necesidades de negocio en software que funciona</h1>
                <p>
                    Ingeniero en Sistemas con experiencia en aplicaciones web, sistemas internos,
                    e-commerce y automatización. He trabajado con React, Node.js, PostgreSQL,
                    C# y Shopify Liquid en entornos corporativos y productos en producción.
                </p>
            </aside>

            <div className="heroActions">
                <a className="cvButton" href="/cv/Alexander_Delgado_Tejeda_CV.pdf" target="_blank" rel="noreferrer">
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
