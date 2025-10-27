import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";
import "../styles/global.css";
import Hero from "../features/Hero";
import Projects from "../features/Projects";

const LandingPage = () => {
 const projectRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const heroZ = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const projectsZ = useTransform(scrollYProgress, [0.3, 0.6], [200, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

    const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="perspective">
      <motion.section
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            scale: heroScale,
            z: heroZ,
            opacity: heroOpacity,
            pointerEvents: "auto",
          }}
        >
          <Hero onViewProjects={scrollToProjects} />
        </motion.div>

        <motion.div
          ref={projectRef}
          style={{
            z: projectsZ,
            opacity: projectsOpacity,
            pointerEvents: "auto",
          }}
        >
          <Projects />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default LandingPage;
