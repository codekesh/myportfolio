import React, { useEffect, useRef } from "react";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Skills from "../components/Techskill";
import { Header } from "../components/Header";
import Work from "../components/Work";
import Projects from "../components/Projects";
import { About } from "../components/About";

function Home({ scrollTo }) {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    if (scrollTo) {
      const sectionRefs = {
        home: homeRef,
        work: workRef,
        projects: projectsRef,
        skills: skillsRef,
        about: aboutRef,
        connect: connectRef,
      };
      const element = sectionRefs[scrollTo]?.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Header ref={homeRef} id="home" />
      <Work ref={workRef} id="work" />
      <Projects ref={projectsRef} id="projects" />
      <Skills ref={skillsRef} id="skills" />
      <About ref={aboutRef} id="about" />
      <Connect ref={connectRef} id="connect" />
      <Footer />
    </>
  );
}

export default Home;
