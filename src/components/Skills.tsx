import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const skills = [
  'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD', 'Git', 'Python', 'Jenkins', 'GitHub Actions', 'Prometheus', 'TypeScript', 'Node.js',
];

const keywords = [
  'DevOps', 'Docker', 'AWS', 'Cloud', 'CI/CD', 'K8s', 'IaC', 'Linux', 'Automation', 'SRE', 'Monitoring', 'Pipelines', 'Infra', 'Cloud Native', 'Agile',
];

const skillsVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1, rotateY: 0,
    transition: { duration: 0.7, staggerChildren: 0.09 }
  },
};
const cardVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.5 } },
};

export const Skills: React.FC = () => {
  // Floating keywords animation
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const spans = Array.from(container.querySelectorAll('.floating-keyword')) as HTMLSpanElement[];
    spans.forEach((span) => {
      const animate = () => {
        const x = Math.random() * 90;
        const y = Math.random() * 80;
        const duration = 6 + Math.random() * 6;
        span.style.left = `${x}%`;
        span.style.top = `${y}%`;
        span.style.animationDuration = `${duration}s`;
        span.style.opacity = `${0.18 + Math.random() * 0.22}`;
      };
      animate();
      span.addEventListener('animationiteration', animate);
    });
    return () => {
      spans.forEach(span => span.removeEventListener('animationiteration', () => {}));
    };
  }, []);

  // Magnetic effect for skill cards
  const MagneticSkillCard: React.FC<{ skill: string }> = ({ skill }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-30, 30], [8, -8]);
    const rotateY = useTransform(x, [-30, 30], [-8, 8]);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const touch = e.touches[0];
      x.set(touch.clientX - centerX);
      y.set(touch.clientY - centerY);
    };

    const handleTouchEnd = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        className="glass-card bg-opacity-80 rounded-xl shadow-md flex items-center justify-center h-20 text-black font-bold text-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[#223] hover:text-[#007BFF] hover:underline hover:underline-offset-4 animate-skill-card skill-3d magnetic-skill-card enhanced-skill-card"
        style={{
          backdropFilter: 'blur(14px)',
          background: 'rgba(30, 41, 59, 0.35)',
          border: '1.5px solid rgba(56, 189, 248, 0.18)',
          perspective: 600,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ 
          rotateY: 16, 
          scale: 1.08, 
          boxShadow: '0 0 32px 8px #38bdf8, 0 2px 8px #007BFF33, 0 0 50px rgba(56, 189, 248, 0.3)', 
          background: 'rgba(56, 189, 248, 0.18)',
          z: 20,
          transition: { type: 'spring', stiffness: 300, damping: 18 }
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <motion.div 
          style={{ transform: "translateZ(10px)" }}
          className="skill-content"
        >
          {skill}
        </motion.div>
        {/* Glow Effect */}
        <motion.div
          className="skill-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        {/* Flip Effect Overlay */}
        <motion.div
          className="skill-flip-overlay"
          initial={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    );
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-br from-[#0a2342] via-[#19376d] to-[#22223b] font-['Inter','Poppins',sans-serif] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={skillsVariants}
    >
      {/* Floating Keywords */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="floating-keyword text-[#38bdf8] text-xs md:text-base font-bold absolute animate-float-keyword select-none"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              opacity: 0.22 + Math.random() * 0.18,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            {kw}
          </span>
        ))}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 relative z-10">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-10">
        {skills.map((skill) => (
          <MagneticSkillCard key={skill} skill={skill} />
        ))}
      </div>
      <style>{`
        .animate-skill-card:hover {
          box-shadow: 0 0 16px 4px #38bdf8, 0 2px 8px #007BFF33;
          transform: scale(1.08) rotateY(3deg);
        }
        .glass-card {
          background: rgba(30, 41, 59, 0.35);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(56, 189, 248, 0.18);
          box-shadow: 0 4px 32px 0 #38bdf822, 0 2px 8px #007BFF33;
          transition: box-shadow 0.2s, border 0.2s, background 0.2s;
        }
        .glass-card:hover, .glass-card:focus {
          border: 1.5px solid #38bdf8;
          box-shadow: 0 0 16px 4px #38bdf8, 0 2px 8px #007BFF33;
          background: rgba(30, 41, 59, 0.45);
        }
        @keyframes floatKeyword {
          0% { transform: translateY(0) scale(1); opacity: 0.18; }
          50% { transform: translateY(-32px) scale(1.1); opacity: 0.32; }
          100% { transform: translateY(0) scale(1); opacity: 0.18; }
        }
        .animate-float-keyword {
          animation: floatKeyword 8s ease-in-out infinite;
        }
        .magnetic-skill-card {
          transform-style: preserve-3d;
          perspective: 600px;
        }
        .enhanced-skill-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.35) 0%, rgba(56, 189, 248, 0.1) 100%);
          border: 2px solid rgba(56, 189, 248, 0.2);
          transition: all 0.3s ease;
        }
        .enhanced-skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #38bdf8, #007BFF);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .enhanced-skill-card:hover::before {
          opacity: 0.1;
        }
        .skill-content {
          position: relative;
          z-index: 2;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .skill-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%);
          border-radius: inherit;
          pointer-events: none;
          z-index: 1;
        }
        .skill-flip-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(0, 123, 255, 0.1));
          border-radius: inherit;
          pointer-events: none;
          backface-visibility: hidden;
          z-index: 1;
        }
        .enhanced-skill-card:hover {
          transform: translateY(-3px);
          border-color: #38bdf8;
        }
        .enhanced-skill-card:hover .skill-content {
          color: #007BFF;
          text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        }
      `}</style>
    </motion.section>
  );
};