import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { BlogCaseStudy } from './components/BlogCaseStudy';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import Resume from './components/Resume';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen />}
      <Navbar />
      <div className={loading ? 'pointer-events-none select-none opacity-0' : 'min-h-screen bg-[#f7f7f7] dark:bg-[#222] transition-colors duration-300 pt-20'}>
        <ThemeToggle />
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><BlogCaseStudy /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
        <section id="resume"><Resume /></section>
        {/* Footer */}
        <footer className="py-8 bg-[#f7f7f7] dark:bg-[#222] text-[#222] dark:text-white text-center border-t-2 border-[#007BFF]/30">
          <p className="text-[#007BFF] dark:text-[#007BFF]">
            © 2024 Amol Lokhande. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;