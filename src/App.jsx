import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900 transition-colors duration-300 relative selection:bg-brand-500 selection:text-white">
      {/* Subtle modern background grid texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] light:opacity-[0.04] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
