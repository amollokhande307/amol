import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { BlogCaseStudy } from './components/BlogCaseStudy';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#222] transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <Skills />
        <Projects />
        <BlogCaseStudy />
        <Certifications />
        <Contact />
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