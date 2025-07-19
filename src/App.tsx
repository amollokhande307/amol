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
import Loading from './components/Loading';
import ParticlesBackground from './components/ParticlesBackground';
import CursorTrail from './components/CursorTrail';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* Global animated backgrounds (desktop only) */}
      <div className="global-waves-bg">
        {/* Parallax SVG Waves */}
        <svg className="wave wave1" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="url(#grad1)" fillOpacity="0.3">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0,160L60,170C120,180,240,200,360,197C480,194,600,170,720,154C840,138,960,130,1080,144C1200,158,1320,194,1380,208L1440,222L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,180L60,170C120,160,240,140,360,150C480,160,600,200,720,210C840,220,960,200,1080,180C1200,160,1320,140,1380,130L1440,120L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,160L60,170C120,180,240,200,360,197C480,194,600,170,720,154C840,138,960,130,1080,144C1200,158,1320,194,1380,208L1440,222L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </path>
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6d3adf" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="wave wave2" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="url(#grad2)" fillOpacity="0.2">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0,240L80,230C160,220,320,200,480,210C640,220,800,250,960,240C1120,230,1280,190,1360,170L1440,150L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;M0,260L80,250C160,240,320,220,480,230C640,240,800,270,960,260C1120,250,1280,210,1360,190L1440,170L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z;M0,240L80,230C160,220,320,200,480,210C640,220,800,250,960,240C1120,230,1280,190,1360,170L1440,150L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </path>
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6d3adf" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <ParticlesBackground />
      <CursorTrail />
      {loading && <Loading />}
      <Navbar />
      <div className={loading ? 'pointer-events-none select-none opacity-0' : 'min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300 pt-20'}>
        <ThemeToggle />
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.section variants={sectionVariants} id="hero"><Hero /></motion.section>
            <motion.section variants={sectionVariants} id="skills"><Skills /></motion.section>
            <motion.section variants={sectionVariants} id="projects"><Projects /></motion.section>
            <motion.section variants={sectionVariants} id="blog"><BlogCaseStudy /></motion.section>
            <motion.section variants={sectionVariants} id="certifications"><Certifications /></motion.section>
            <motion.section variants={sectionVariants} id="contact"><Contact /></motion.section>
          </motion.div>
        </AnimatePresence>
        {/* Footer */}
        <footer className="relative py-8 bg-transparent text-[#222] dark:text-white text-center border-t-2 border-[#007BFF]/30 overflow-hidden overflow-x-hidden">
          {/* Animated Footer Waves */}
          <div className="absolute left-0 top-0 w-full max-w-full overflow-hidden pointer-events-none z-0" style={{height: 60}}>
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-footer-wave">
              <path d="M0,20 C480,60 960,0 1440,20 L1440,60 L0,60 Z" fill="#38bdf8" fillOpacity="0.3" />
              <path d="M0,40 C360,10 1080,50 1440,40 L1440,60 L0,60 Z" fill="#007BFF" fillOpacity="0.2" />
            </svg>
          </div>
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4 sm:gap-3"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            <div className="flex gap-5 sm:gap-3 mb-2 flex-wrap justify-center">
              <motion.a
                href="https://github.com/amollokhande307"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-2 bg-[#1e293b] rounded-full transition shadow-lg text-white hover:bg-[#38bdf8]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 0 }}
              >
                <i className="fab fa-github" />
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/amol-lokhande-382976361"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-2 bg-[#1e293b] rounded-full transition shadow-lg text-white hover:bg-[#38bdf8]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 0.5 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/amol_lokhande_02"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-2 bg-[#1e293b] rounded-full transition shadow-lg text-white hover:bg-[#38bdf8]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.276.058-2.15.24-2.91.51-.8.28-1.48.66-2.15 1.33-.67.67-1.05 1.35-1.33 2.15-.27.76-.452 1.634-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.276.24 2.15.51 2.91.28.8.66 1.48 1.33 2.15.67.67 1.35 1.05 1.33-2.15.27-.76.452-1.634.51-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.276-.24-2.15-.51-2.91-.28-.8-.66-1.48-1.33-2.15-.67-.67-1.35-1.05-2.15-1.33-.76-.27-1.634-.452-2.91-.51C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
              </motion.a>
            </div>
            <motion.p
              className="text-[#007BFF] dark:text-[#007BFF] mt-2 text-base sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              © 2024 Amol Lokhande. Built with React, TypeScript, and Tailwind CSS.
            </motion.p>
          </motion.div>
          <style>{`
            .animate-footer-wave {
              animation: footerWaveMove 8s linear infinite alternate;
            }
            @keyframes footerWaveMove {
              0% { transform: translateX(0); }
              100% { transform: translateX(-40px); }
            }
            .global-waves-bg {
              position: fixed;
              z-index: 0;
              inset: 0;
              width: 100vw;
              height: 100vh;
              pointer-events: none;
              overflow: hidden;
            }
            .wave {
              position: absolute;
              left: 0;
              width: 100vw;
              height: 100vh;
              min-height: 320px;
            }
            .wave1 { top: 0; opacity: 0.3; }
            .wave2 { top: 0; opacity: 0.2; }
          `}</style>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;