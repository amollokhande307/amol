import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/amol-lokhande-382976361',
  github: 'https://github.com/amollokhande307',
  instagram: 'https://www.instagram.com/amol_lokhande_02',
};

const heroVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

const typewriterPhrases = [
  "Hi, I'm Amol Lokhande",
  'DevOps',
  'Cloud',
];

const Hero: React.FC = () => {
  // Typewriter effect
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing && charIdx < typewriterPhrases[phraseIdx].length) {
      timeout = setTimeout(() => {
        setDisplayed(prev => prev + typewriterPhrases[phraseIdx][charIdx]);
        setCharIdx(charIdx + 1);
      }, 70);
    } else if (typing && charIdx === typewriterPhrases[phraseIdx].length) {
      timeout = setTimeout(() => setTyping(false), 1200);
    } else if (!typing && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(prev => prev.slice(0, -1));
        setCharIdx(charIdx - 1);
      }, 40);
    } else if (!typing && charIdx === 0) {
      setTyping(true);
      setPhraseIdx((phraseIdx + 1) % typewriterPhrases.length);
    }
    return () => clearTimeout(timeout);
  }, [typing, charIdx, phraseIdx]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Social icon animation variants
  const socialIconVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: { boxShadow: '0 0 0 4px #38bdf8, 0 0 16px #38bdf8', scale: 1.15 },
  };

  // Simple CTA buttons without magnetic effect
  const CTAButton: React.FC<{ children: React.ReactNode; href: string; delay?: number; download?: boolean }> = ({ children, href, delay = 0, download = false }) => {
    return (
      <motion.a
        href={href}
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        className="cta-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={socialIconVariants}
        transition={{ delay: 0.1 + delay }}
      >
        {children}
      </motion.a>
    );
  };



  return (
    <motion.section
      className="relative min-h-[70vh] flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#19376d] text-white font-['Inter','Poppins',sans-serif] pt-24 pb-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={heroVariants}
    >
      {/* Top Animated Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0" style={{height: 90}}>
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hero-wave">
          <path d="M0,40 C480,90 960,0 1440,40 L1440,90 L0,90 Z" fill="#38bdf8" fillOpacity="0.3" />
          <path d="M0,60 C360,20 1080,100 1440,60 L1440,90 L0,90 Z" fill="#007BFF" fillOpacity="0.2" />
        </svg>
      </div>
      {/* Profile Photo with glow */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex justify-center items-center w-full md:w-auto z-10">
        <div className="hero-float-img-glow animate-hero-float">
          <img
            src="/profile.jpg"
            alt="Amol Lokhande"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#38bdf8] shadow-xl bg-white profile-glow"
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg typewriter-text">
          {displayed}
          <span className="typewriter-cursor">{showCursor ? '|' : ' '}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#38bdf8]">DevOps Engineer | Cloud Enthusiast</h2>
        <p className="max-w-xl mb-8 text-[#cbd5e1]">I build scalable cloud solutions, automate workflows, and love all things DevOps, Docker, and Kubernetes.</p>
        <div className="flex gap-4 mb-4">
          <CTAButton href="/assets/resume.pdf" download>
            <Download className="w-5 h-5 cta-icon" />
            Resume
          </CTAButton>
          <CTAButton href={socialLinks.github} delay={0.1}>
            <Github className="w-5 h-5 cta-icon" />
            GitHub
          </CTAButton>
          <CTAButton href={socialLinks.linkedin} delay={0.2}>
            <Linkedin className="w-5 h-5 cta-icon" />
            LinkedIn
          </CTAButton>
        </div>

      </div>
      {/* Bottom Animated Wave */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none z-0" style={{height: 90}}>
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hero-wave">
          <path d="M0,40 C480,90 960,0 1440,40 L1440,90 L0,90 Z" fill="#38bdf8" fillOpacity="0.5" />
          <path d="M0,60 C360,20 1080,100 1440,60 L1440,90 L0,90 Z" fill="#007BFF" fillOpacity="0.7" />
        </svg>
      </div>
      <style>{`
        .animate-hero-wave {
          animation: heroWaveMove 14s linear infinite alternate;
        }
        @keyframes heroWaveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        .animate-hero-float {
          animation: heroFloat 7s ease-in-out infinite alternate;
        }
        @keyframes heroFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
        .hero-float-img-glow {
          filter: drop-shadow(0 0 24px #38bdf8cc);
        }
        .profile-glow {
          box-shadow: 0 0 0 6px #38bdf855, 0 2px 8px #007BFF33;
        }
        .typewriter-text {
          font-family: 'Poppins', 'Inter', sans-serif;
          letter-spacing: 1px;
          color: #fff;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 1ch;
          color: #38bdf8;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cta-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(30, 41, 59, 0.35);
          color: #fff;
          font-weight: 600;
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          box-shadow: 0 2px 8px #007BFF33;
          border: 1.5px solid rgba(56, 189, 248, 0.25);
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s, border 0.2s, background 0.2s, transform 0.15s;
        }
        .cta-btn:hover {
          background: rgba(56, 189, 248, 0.18);
          border: 1.5px solid #38bdf8;
          box-shadow: 0 0 16px 4px #38bdf8, 0 2px 8px #007BFF33;
        }
        .cta-btn:active {
          transform: scale(0.95);
        }
        .cta-btn .cta-icon {
          transition: transform 0.18s;
        }
        .cta-btn:hover .cta-icon {
          animation: bounceIcon 0.5s;
        }
        @keyframes bounceIcon {
          0% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }

      `}</style>
    </motion.section>
  );
};

export { Hero };