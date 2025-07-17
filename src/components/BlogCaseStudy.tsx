import React from 'react';
import { Linkedin } from 'lucide-react';

const blogs = [
  { title: 'TCS × Kubernetes: Case Study', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Case Study: Why Netflix Uses AWS', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Why Big Companies Use Linux', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Change the Logo in Linux', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'What Really Happens When You Press Ctrl+C or Ctrl+Z?', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Why Leading Companies Use Docker', linkedin: 'https://linkedin.com/in/your-link' },
  { title: '5 GUI Programs in Linux', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Add More Terminals & GUI Interfaces', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'Change the Icon of Any Application', linkedin: 'https://linkedin.com/in/your-link' },
  { title: 'AWS Neptune Case Study', linkedin: 'https://linkedin.com/in/your-link' },
];

export const BlogCaseStudy: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0a2342] to-[#19376d] font-['Inter','Poppins',sans-serif]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Blog & Case Studies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <a
            key={blog.title}
            href={blog.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#1e293b] bg-opacity-90 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-transform duration-200 cursor-pointer group overflow-hidden blog-card"
          >
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">{blog.title}</h3>
            <div className="flex gap-2 mt-auto">
              <span className="p-2 bg-[#22223b] rounded-full hover:bg-[#38bdf8] transition">
                <Linkedin className="w-5 h-5 text-[#007BFF] group-hover:text-white" />
              </span>
            </div>
            {/* Water Ripple Animation */}
            <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="ripple-effect"></span>
            </span>
          </a>
        ))}
      </div>
      {/* Wave Animation at Bottom */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none" style={{height: 60}}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-blog-wave">
          <path d="M0,20 C480,60 960,0 1440,20 L1440,60 L0,60 Z" fill="#38bdf8" fillOpacity="0.5" />
          <path d="M0,40 C360,0 1080,60 1440,40 L1440,60 L0,60 Z" fill="#007BFF" fillOpacity="0.7" />
        </svg>
      </div>
      <style>{`
        .blog-card {
          overflow: hidden;
        }
        .blog-card .ripple-effect {
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
        .animate-blog-wave {
          animation: blogWaveMove 5s linear infinite alternate;
        }
        @keyframes blogWaveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
      `}</style>
    </section>
  );
}; 