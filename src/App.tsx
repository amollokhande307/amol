import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black dark:bg-black transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 bg-black dark:bg-black text-white text-center border-t-2 border-blue-500/30">
          <p className="text-blue-300">
            © 2024 Amol Lokhande. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;