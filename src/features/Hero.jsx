import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/foto-profesional.jpeg";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
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
                title="Full-Stack Web Developer"
                handle="alexdtejeda"
                status="Online"
                contactText="Contactame"
                avatarUrl={Avatar}
                showUserInfo={true}
                enableTilt={!prefersReducedMotion}
                enableMobileTilt={false}
                onContactClick={handleWhatsappClick}
            />
        </section>

        <section className="introductionSide">
            <aside className="texside">
                <h1>Convierto ideas en experiencias web que generan resultados</h1>
                <p>
                    Desarrollador web full-stack con más de 3 años de experiencia construyendo desde e-commerce de alto rendimiento hasta aplicaciones con inteligencia artificial. Combino código limpio, diseño cuidado y obsesión por la conversión para que cada proyecto no solo se vea bien: funcione y venda.
                </p>
            </aside>

            <div className="social-links">
                <a href="https://github.com/AlexanderTejeda" target="_blank" rel="noreferrer" aria-label="GitHub de Alexander Tejeda">
                    <FaGithub aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Alexander Tejeda">
                    <FaLinkedin aria-hidden="true" />
                </a>
                <a href="https://x.com/alexdtejeda" target="_blank" rel="noreferrer" aria-label="X (Twitter) de Alexander Tejeda">
                    <FaXTwitter aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/@alexanderdtejeda" target="_blank" rel="noreferrer" aria-label="YouTube de Alexander Tejeda">
                    <FaYoutube aria-hidden="true" />
                </a>
                <a href="https://www.tiktok.com/@alexdtejeda" target="_blank" rel="noreferrer" aria-label="TikTok de Alexander Tejeda">
                    <AiFillTikTok aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/alexdtjeda/" target="_blank" rel="noreferrer" aria-label="Facebook de Alexander Tejeda">
                    <FaFacebookSquare aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/alexdtejeda/" target="_blank" rel="noreferrer" aria-label="Instagram de Alexander Tejeda">
                    <FaInstagram aria-hidden="true" />
                </a>
            </div>
        </section>


    </header>
    );
}


export default Hero;