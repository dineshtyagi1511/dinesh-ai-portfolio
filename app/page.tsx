"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Each section wrapped in Reveal for smooth scroll animations */}
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Education />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}