import "../styles/global.css";
import Hero from "../features/Hero";
import Projects from "../features/Projects";

const LandingPage = () => {


  return (
    <main className="perspective">
      <section>
        <div>
          <Hero  />
        </div>

        <div>
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
