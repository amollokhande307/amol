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

const skills = [
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD', 'Git', 'Python', 'Shell Scripting',
  'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Ansible', 'React', 'TypeScript', 'Node.js',
];

export const Skills: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#0a2342] via-[#19376d] to-[#22223b] font-['Inter','Poppins',sans-serif]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={skill}
            className="bg-[#1e293b] bg-opacity-80 rounded-xl shadow-md flex items-center justify-center h-20 text-[#38bdf8] text-lg font-semibold transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-[#223] hover:text-[#007BFF] hover:underline hover:underline-offset-4 animate-skill-card"
            style={{
              transform: idx % 2 === 0 ? 'rotateY(0deg)' : 'rotateY(0deg)',
            }}
          >
            {skill}
          </div>
        ))}
      </div>
      <style>{`
        .animate-skill-card:hover {
          box-shadow: 0 0 16px 4px #38bdf8, 0 2px 8px #007BFF33;
          transform: scale(1.08) rotateY(3deg);
        }
      `}</style>
    </section>
  );
};