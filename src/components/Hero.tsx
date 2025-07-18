import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/amol-lokhande-382976361',
  github: 'https://github.com/amollokhande307',
  instagram: 'https://www.instagram.com/amol_lokhande_02',
};

const heroVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className="relative min-h-[70vh] flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#19376d] text-white font-['Inter','Poppins',sans-serif] pt-24 pb-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={heroVariants}
    >
      {/* Top Animated Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0" style={{height: 90}}>
        <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hero-wave">
          <path d="M0,40 C480,90 960,0 1440,40 L1440,90 L0,90 Z" fill="#38bdf8" fillOpacity="0.3" />
          <path d="M0,60 C360,20 1080,100 1440,60 L1440,90 L0,90 Z" fill="#007BFF" fillOpacity="0.2" />
        </svg>
      </div>
      {/* Profile Photo with floating animation */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex justify-center items-center w-full md:w-auto z-10">
        <div className="hero-float-img">
          <img
            src="/profile.jpg"
            alt="Amol Lokhande"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#007BFF] shadow-xl bg-white"
          />
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hi, I'm Amol Lokhande
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#38bdf8]">DevOps Engineer | Cloud Enthusiast</h2>
        <p className="max-w-xl mb-8 text-[#cbd5e1]">I build scalable cloud solutions, automate workflows, and love all things DevOps, Docker, and Kubernetes.</p>
        {/* Social Icons */}
        <div className="flex gap-5 mt-2">
          <MagneticButton
            as="a"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#1e293b] rounded-full hover:bg-[#38bdf8] transition shadow-lg"
          >
            <Linkedin className="w-6 h-6 text-[#007BFF] group-hover:text-white" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#1e293b] rounded-full hover:bg-[#007BFF] transition shadow-lg"
          >
            <Github className="w-6 h-6 text-[#38bdf8] group-hover:text-white" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#1e293b] rounded-full hover:bg-pink-500 transition shadow-lg"
          >
            <Instagram className="w-6 h-6 text-pink-400 group-hover:text-white" />
          </MagneticButton>
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
          animation: heroWaveMove 7s linear infinite alternate;
        }
        @keyframes heroWaveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        .hero-float-img {
          animation: floatProfile 3.2s ease-in-out infinite;
        }
        @keyframes floatProfile {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </motion.section>
  );
};

export { Hero };