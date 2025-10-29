import Hero from "../features/Hero";
import Projects from "../features/Projects";
import "../styles/LandingPage.css";

const LandingPage = () => {


  return (
    <main className="perspective">
      <section>
        <div className="hero-section">
          <Hero  />
        </div>

        <div className="projects-section">
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
