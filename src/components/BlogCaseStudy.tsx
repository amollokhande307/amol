import React from 'react';
import { Linkedin } from 'lucide-react';

const blogs = [
  {
    title: 'AWS Neptune Case Study',
    intro: 'A deep dive into AWS Neptune and its use cases.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_awscloud-awsneptune-linuxworldmentorship-activity-7351516522013503490-1w1X',
  },
  {
    title: 'TCS × Kubernetes: Case Study',
    intro: 'How TCS leverages Kubernetes for enterprise-scale deployments.',
    linkedin: '#',
  },
  {
    title: 'Why Netflix Uses AWS?',
    intro: 'Exploring the reasons behind Netflix’s choice of AWS.',
    linkedin: '#',
  },
  {
    title: 'Why Big Companies Use Linux?',
    intro: 'The advantages of Linux for large organizations.',
    linkedin: '#',
  },
  {
    title: 'Change the Logo in Linux',
    intro: 'A guide to customizing Linux logos.',
    linkedin: '#',
  },
  {
    title: 'What Happens When You Press Ctrl+C / Ctrl+Z?',
    intro: 'Understanding process signals in Unix/Linux.',
    linkedin: '#',
  },
  {
    title: 'Why Leading Companies Use Docker?',
    intro: 'Docker’s impact on modern software delivery.',
    linkedin: '#',
  },
  {
    title: '5 GUI Programs in Linux',
    intro: 'Top 5 GUI programs every Linux user should know.',
    linkedin: '#',
  },
  {
    title: 'Add More Terminals & GUI Interfaces',
    intro: 'Expanding your Linux experience with more terminals and GUIs.',
    linkedin: '#',
  },
  {
    title: 'Change the Icon of Any Application',
    intro: 'How to change application icons in Linux.',
    linkedin: '#',
  },
];

export const BlogCaseStudy: React.FC = () => {
  // Water ripple effect on click
  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.nativeEvent.offsetX + 'px';
    ripple.style.top = e.nativeEvent.offsetY + 'px';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

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
            onClick={handleRipple}
          >
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">{blog.title}</h3>
            <p className="text-[#cbd5e1] mb-4 flex-1">{blog.intro}</p>
            <div className="flex gap-2 mt-auto">
              <span className="p-2 bg-[#22223b] rounded-full hover:bg-[#38bdf8] transition">
                <Linkedin className="w-5 h-5 text-[#007BFF] group-hover:text-white" />
              </span>
            </div>
            {/* Water Ripple Animation */}
            <span className="absolute inset-0 pointer-events-none">
              {/* Ripple will be injected here on click */}
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
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.25);
          width: 120px;
          height: 120px;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: rippleAnim 0.7s linear;
        }
        @keyframes rippleAnim {
          0% { opacity: 0.7; transform: scale(0.2); }
          100% { opacity: 0; transform: scale(1.5); }
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