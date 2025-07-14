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
const Loader: React.FC = () => (
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
      transition: 'opacity 0.7s ease',
    }}
    className="loader-screen"
  >
    <h1
      className="text-4xl md:text-6xl font-extrabold text-center animate-gradient-text"
      style={{
        fontFamily: 'Poppins, Inter, Roboto, sans-serif',
        color: '#fff',
        letterSpacing: '0.04em',
        background: 'linear-gradient(90deg, #fff, #007BFF, #fff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'gradientMove 2s linear infinite',
      }}
    >
      Welcome to Amol Lokhande's Portfolio
    </h1>
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradientMove 2.5s linear infinite;
      }
    `}</style>
  </div>
);

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