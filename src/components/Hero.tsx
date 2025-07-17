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
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#19376d] text-white font-['Inter','Poppins',sans-serif] pt-24 pb-16">
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Hi, I'm Amol Lokhande</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#38bdf8]">DevOps Engineer | Cloud Enthusiast</h2>
        <p className="max-w-xl text-center mb-8 text-[#cbd5e1]">I build scalable cloud solutions, automate workflows, and love all things DevOps, Docker, and Kubernetes.</p>
        <a
          href="/assets/resume.pdf"
          download
          className="inline-block bg-[#007BFF] hover:bg-[#2563eb] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-offset-2 text-lg"
        >
          Download Resume
        </a>
      </div>
      {/* Animated Wave at Bottom */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none" style={{height: 90}}>
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hero-wave">
          <path d="M0,40 C480,90 960,0 1440,40 L1440,90 L0,90 Z" fill="#38bdf8" fillOpacity="0.5" />
          <path d="M0,60 C360,20 1080,100 1440,60 L1440,90 L0,90 Z" fill="#007BFF" fillOpacity="0.7" />
        </svg>
      </div>
      <style>{`
        .animate-hero-wave {
          animation: heroWaveMove 5s linear infinite alternate;
        }
        @keyframes heroWaveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
      `}</style>
    </section>
  );
};