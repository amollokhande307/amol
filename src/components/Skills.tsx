import React from 'react';
import { 
  Code, 
  Cloud, 
  Container, 
  Database, 
  Server, 
  Terminal, 
  Zap,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD', 'Git', 'Python', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'TypeScript', 'Node.js',
];

const skillsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, staggerChildren: 0.09 }
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Skills: React.FC = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-gradient-to-br from-[#0a2342] via-[#19376d] to-[#22223b] font-['Inter','Poppins',sans-serif]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={skillsVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            className="glass-card bg-opacity-80 rounded-xl shadow-md flex items-center justify-center h-20 text-[#38bdf8] text-lg font-semibold transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[#223] hover:text-[#007BFF] hover:underline hover:underline-offset-4 animate-skill-card"
            style={{
              backdropFilter: 'blur(14px)',
              background: 'rgba(30, 41, 59, 0.35)',
              border: '1.5px solid rgba(56, 189, 248, 0.18)',
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
      `}</style>
    </motion.section>
  );
};