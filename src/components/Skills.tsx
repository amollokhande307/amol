import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
          <motion.div
            key={skill}
            className="glass-card bg-opacity-80 rounded-xl shadow-md flex items-center justify-center h-20 text-black font-bold text-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[#223] hover:text-[#007BFF] hover:underline hover:underline-offset-4 animate-skill-card skill-3d"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'rgba(30, 41, 59, 0.35)',
              border: '1.5px solid rgba(56, 189, 248, 0.18)',
              perspective: 600,
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ rotateY: 16, scale: 1.08, boxShadow: '0 0 32px 8px #38bdf8, 0 2px 8px #007BFF33', background: 'rgba(56, 189, 248, 0.18)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            {skill}
          </motion.div>
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
      `}</style>
    </motion.section>
  );
};