import ProfileCard from "../components/ProfileCard";
import Avatar from "../assets/Avatar.png";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import "../styles/Hero.css";


const Hero = ({onViewProjects}) => {
    
    const handleWhatsappClick = () => {
        const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
        const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    
    return (
    <main> 

        <section className="cardSide">
            <ProfileCard
                name="Alexander Tejeda"
                title="Web Developer"
                handle="alexdtejeda"
                status="Online"
                contactText="Contactame"
                avatarUrl={Avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleWhatsappClick}
            />
        </section>

        <section className="introductionSide">
            <aside className="texside">
                <h1>Desarrollador web con mas de 2 años de experiencia</h1>
                <p>
                    He trabajado en diversos proyectos, desde sitios web simples hasta aplicaciones web complejas. Mi objetivo es crear experiencias digitales atractivas y funcionales que ayuden a las empresas a alcanzar sus metas en línea.
                </p>
            </aside>
            
            <button 
                className="ctaButton"
                onClick={onViewProjects} 
            >
                Ver proyectos
            </button>

            <div className="social-links">
                <a href="https://github.com/AlexanderTejeda" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/alexdtejeda/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/alexdtejeda" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://www.youtube.com/@alexanderdtejeda" target="_blank" rel="noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.tiktok.com/@alexdtejeda" target="_blank" rel="noreferrer">
                    <AiFillTikTok />
                </a>
                <a href="https://www.facebook.com/alexdtjeda/" target="_blank" rel="noreferrer">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/alexdtejeda/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </section>

      
    </main>
    );
}


export default Hero;