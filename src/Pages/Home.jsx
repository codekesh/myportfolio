import React, { useEffect, useRef } from "react";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Skills from "../components/Techskill";
import { Header } from "../components/Header";
import Work from "../components/Work";
import Projects from "../components/Projects";
import { About } from "../components/About";

function Home({ scrollTo }) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (scrollTo) {
      const element = elementRef.current;
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Header />
      <Work ref={elementRef.current} id="work" />
      <Projects ref={elementRef.current} id="projects" />
      <Skills />
      <About />
      <Connect />
      <Footer />
    </>
  );
}

export default Home;
