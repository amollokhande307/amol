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

// Loader component
const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true); // Start fade-in immediately
    const timer = setTimeout(() => setFade(false), 2500); // Start fade-out after 2.5s
    const hideTimer = setTimeout(() => setVisible(false), 3000); // Hide after 3s
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#0f172a',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease',
        opacity: fade ? 1 : 0,
        pointerEvents: 'all',
      }}
      className="loader-screen"
    >
      <h1
        style={{
          fontFamily: 'Poppins, Inter, sans-serif',
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#fff',
          textAlign: 'center',
          letterSpacing: '0.04em',
        }}
      >
        Welcome to My Portfolio
      </h1>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <Loader />}
      <Navbar />
      <div className={loading ? 'pointer-events-none select-none opacity-0' : 'min-h-screen bg-[#f7f7f7] dark:bg-[#222] transition-colors duration-300 pt-20'}>
        <ThemeToggle />
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><BlogCaseStudy /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
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