import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const projects = [
  {
    title: 'Video Recording & Email Delivery System',
    description: 'A system to record videos and deliver them via email automatically.',
    github: 'https://github.com/your-link',
    linkedin: 'https://linkedin.com/in/your-link',
  },
  {
    title: 'Grocery Store Finder',
    description: 'Finds nearby grocery stores using geolocation and maps.',
    github: 'https://github.com/your-link',
    linkedin: 'https://linkedin.com/in/your-link',
  },
  {
    title: 'Live Location',
    description: 'Real-time location sharing and tracking app.',
    github: 'https://github.com/your-link',
    linkedin: 'https://linkedin.com/in/your-link',
  },
  {
    title: 'AI-Powered Stock Market Prediction',
    description: 'Predicts stock prices using AI/ML models.',
    github: 'https://github.com/your-link',
    linkedin: 'https://linkedin.com/in/your-link',
  },
  {
    title: 'Apache Setup in Docker',
    description: 'Automated Apache server setup inside Docker containers.',
    github: 'https://github.com/your-link',
    linkedin: 'https://linkedin.com/in/your-link',
  },
  {
    title: 'Docker Inside Docker (DinD)',
    description: 'Running Docker inside Docker for advanced CI/CD workflows.',
    github: '',
    linkedin: 'https://linkedin.com/in/your-link',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#19376d] to-[#0a2342] font-['Inter','Poppins',sans-serif]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="relative bg-[#1e293b] bg-opacity-90 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-transform duration-200 cursor-pointer group overflow-hidden project-card"
          >
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">{project.title}</h3>
            <p className="text-[#cbd5e1] mb-4 flex-1">{project.description}</p>
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#22223b] rounded-full hover:bg-[#007BFF] transition">
                  <Github className="w-5 h-5 text-[#38bdf8] group-hover:text-white" />
                </a>
              )}
              {project.linkedin && (
                <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#22223b] rounded-full hover:bg-[#38bdf8] transition">
                  <Linkedin className="w-5 h-5 text-[#007BFF] group-hover:text-white" />
                </a>
              )}
            </div>
            {/* Water Ripple Animation */}
            <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="ripple-effect"></span>
            </span>
          </div>
        ))}
      </div>
      <style>{`
        .project-card {
          overflow: hidden;
        }
        .project-card .ripple-effect {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, #38bdf8 0%, transparent 70%);
          opacity: 0.18;
          transform: translate(-50%, -50%) scale(0.7);
          animation: rippleAnim 1.2s infinite alternate;
        }
        @keyframes rippleAnim {
          0% { opacity: 0.18; transform: translate(-50%, -50%) scale(0.7); }
          100% { opacity: 0.28; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </section>
  );
};