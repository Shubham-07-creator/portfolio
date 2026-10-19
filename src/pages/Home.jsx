import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Projects from '../components/Projects';
import EngineeringNotes from '../components/EngineeringNotes';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TechMarquee />
      <Projects />
      <EngineeringNotes />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
