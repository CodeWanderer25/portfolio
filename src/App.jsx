import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Approach from './components/Approach';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080C15] text-slate-200 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Approach /> */}
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
