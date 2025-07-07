import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['DevOps', 'Cloud', 'Automation', 'AI'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[currentIndex];
      
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(prev => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  const handleRippleClick = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    const profileDiv = e.currentTarget;
    
    // Create particle burst effect
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-burst';
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.animationDelay = `${i * 0.1}s`;
      particle.style.transform = `rotate(${i * 30}deg) translateX(30px)`;
      
      profileDiv.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 800);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-background" />
      
      {/* Professional Textile Pattern */}
      <div className="absolute inset-0 royal-textile-pattern opacity-30" />
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0">
        <div className="royal-elegant-float"></div>
        <div className="royal-elegant-float"></div>
        <div className="royal-elegant-float"></div>
        <div className="royal-elegant-float"></div>
      </div>
      
      {/* Professional Accent Lines */}
      <div className="royal-accent-lines hidden lg:block"></div>
      
      {/* Sophisticated Code Pattern */}
      <div className="royal-code-pattern hidden lg:block"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-royal-pulse ${
              i % 4 === 0 ? 'w-1 h-1 bg-yellow-400/30 rounded-full' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-blue-900/25 rounded-full' :
              i % 4 === 2 ? 'w-2 h-0.5 bg-yellow-500/20 rounded-full' :
              'w-0.5 h-2 bg-black/15 rounded-full'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Fixed Name Element */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="writing-vertical text-lg font-bold">
          AMOL LOKHANDE
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div 
              onClick={handleProfileClick}
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-yellow-400 via-blue-900 to-black p-1 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 hover:scale-110 cursor-pointer group relative"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-yellow-50 dark:bg-gray-800 relative">
                <img 
                  src="/public/WhatsApp Image 2025-07-07 at 21.49.05_ef2d8c6b.jpg" 
                  alt="Amol Lokhande"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-yellow-100 dark:border-gray-800"></div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-yellow-500/30 rounded-full flex items-center justify-center animate-royal-pulse">
              <span className="text-xs">⚙️</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-900/30 rounded-full flex items-center justify-center animate-royal-pulse" style={{ animationDelay: '1s' }}>
              <span className="text-xs">☁️</span>
            </div>
            <div className="absolute top-0 -right-8 w-4 h-4 bg-black/20 rounded-full flex items-center justify-center animate-royal-pulse" style={{ animationDelay: '2s' }}>
              <span className="text-xs">🐳</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-50 dark:text-yellow-100 leading-tight">
            Hi, I'm <span className="text-yellow-300 dark:text-yellow-200">Amol Lokhande</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal text-yellow-200 dark:text-yellow-300">
              {currentText}
              <span className="inline-block w-0.5 h-8 bg-yellow-400 dark:bg-yellow-300 ml-1 animate-royal-pulse"></span>
              {' '}Enthusiast
            </span>
          </h1>

          {/* Bio */}
          <p className="text-lg md:text-xl text-yellow-100 dark:text-yellow-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build scalable cloud infrastructure and automate workflows.
            <br />
            Passionate about DevOps, coding, and creating AI-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleRippleClick}
              className="relative overflow-hidden px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/amollokhande307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 royal-glass rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Github className="w-5 h-5 text-yellow-100 dark:text-yellow-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amol-lokhande-382976361" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 royal-glass rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Linkedin className="w-5 h-5 text-blue-300" />
              </a>
              <a 
                href="https://www.instagram.com/amol_lokhande_02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 royal-glass rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-royal-bounce">
          <ChevronDown className="w-6 h-6 text-yellow-300 dark:text-yellow-200" />
        </div>
      </div>
    </section>
  );
};