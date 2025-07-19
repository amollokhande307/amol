import React, { useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'MenuBase',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/manubase.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_vimal-ai-devops-activity-7349015234885398529-dRoy',
  },
  {
    title: 'College Student',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/college%20student.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-project-college-student-profile-activity-7346395278616186880-fASR',
  },
  {
    title: 'Bank Manager',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/bank%20manager.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-ai-powered-banking-assistant-activity-7346942613884698624-nqnB',
  },
  {
    title: 'WhatsApp',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/whatsapp.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_just-built-whatsapp-message-sender-app-using-activity-7348555003076186113-bhUL',
  },
  {
    title: 'Instagram',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/insta.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-streamlit-webdevelopment-activity-7349647561294544896-jd-E',
  },
  {
    title: 'Twitter',
    github: '',
    linkedin: '',
  },
  {
    title: 'Call App',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/call.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-twilio-streamlit-activity-7349283860439793664-8YMs',
  },
  {
    title: 'Email Tool',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/email.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-smtp-streamlit-activity-7348572146006163457-H6U6',
  },
  {
    title: 'All-in-One Communication App',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/python%20menu.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_summerinternship-python-streamlit-activity-7350000889304133632-uta_',
  },
  {
    title: 'Video Recording & Email Delivery System',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linuxworld-mentorshipmatters-vimaldagasir-activity-7351544750178496512-XqDt',
  },
  {
    title: 'Grocery Store Finder',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_webdevelopment-javascript-geolocation-activity-7351573926012928000-LGYV',
  },
  {
    title: 'Live Location',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/Live%20Location.html',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_webdevelopment-javascript-html-activity-7351210348974080000-rfTy',
  },
  {
    title: 'AI-Powered Stock Market Prediction',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/AI-Powered%20Stock%20Market%20Prediction.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_aiinfinance-geminiai-streamlit-activity-7350407473926754304-iT8p',
  },
  {
    title: 'Apache Setup',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main/apache%20setup',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_devops-docker-apache-activity-7350381049182392321-ZTwX',
  },
  {
    title: 'Docker Inside Docker',
    github: '',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_docker-devops-cloudcomputing-activity-7351604170392576002-oeX4',
  },
];

const projectsVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, staggerChildren: 0.12 }
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

type Project = typeof projects[number];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, v => v);
  const rotateY = useTransform(y, v => v);
  const setTilt = (rx: number, ry: number) => {
    x.set(rx);
    y.set(ry);
  };
  // Water ripple effect on click
  const handleRipple = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.nativeEvent.offsetX + 'px';
    ripple.style.top = e.nativeEvent.offsetY + 'px';
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };
  // 3D tilt effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const xVal = e.clientX - rect.left;
    const yVal = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = ((yVal - centerY) / centerY) * 10;
    const rotateYVal = ((xVal - centerX) / centerX) * -10;
    setTilt(rotateXVal, rotateYVal);
  };
  const handleMouseLeave = () => {
    setTilt(0, 0);
  };
  return (
    <motion.div
      key={project.title}
      ref={cardRef}
      className="relative glass-card bg-opacity-90 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-transform duration-200 cursor-pointer group overflow-hidden project-card min-h-[170px]"
      style={{
        rotateX,
        rotateY,
        boxShadow: '0 8px 32px 0 #38bdf855, 0 2px 8px #007BFF33',
        willChange: 'transform',
        backdropFilter: 'blur(14px)',
        background: 'rgba(30, 41, 59, 0.35)',
        border: '1.5px solid rgba(56, 189, 248, 0.18)',
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{
        scale: 1.04,
        zIndex: 2,
        boxShadow: '0 0 32px 8px #38bdf8, 0 2px 8px #007BFF33',
        border: '1.5px solid #38bdf8',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <h3 className="text-lg sm:text-xl font-bold text-black mb-1 sm:mb-2 break-words">{project.title}</h3>
      <div className="flex gap-2 sm:gap-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="code-btn p-2 sm:p-2 bg-[#22223b] rounded-full hover:bg-[#007BFF] transition relative overflow-hidden group"
            whileTap={{ scale: 0.92 }}
          >
            <Github className="w-5 h-5 text-[#38bdf8] group-hover:text-white" />
            <span className="absolute left-1/2 bottom-1.5 w-0 h-0.5 bg-[#38bdf8] group-hover:w-4/5 transition-all duration-300 origin-center rounded-full" />
          </motion.a>
        )}
        {project.linkedin && (
          <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2 bg-[#22223b] rounded-full hover:bg-[#38bdf8] transition">
            <Linkedin className="w-5 h-5 text-[#007BFF] group-hover:text-white" />
          </a>
        )}
      </div>
      {/* Water Ripple Animation */}
      <span className="absolute inset-0 pointer-events-none">
        {/* Ripple will be injected here on click */}
      </span>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <motion.section
      className="py-12 sm:py-10 px-2 sm:px-4 bg-gradient-to-b from-[#19376d] to-[#0a2342] font-['Inter','Poppins',sans-serif]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={projectsVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-6">Projects</h2>
      {/* Animated filtering controls (future) */}
      {/* <div className="flex justify-center mb-8 gap-4">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('web')}>Web</button>
        <button onClick={() => setFilter('cloud')}>Cloud</button>
      </div> */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </div>
      <style>{`
        .project-card {
          overflow: hidden;
          perspective: 800px;
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
        .project-card .ripple-effect {
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
        .code-btn {
          position: relative;
          overflow: hidden;
        }
        .code-btn::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0%; height: 2px;
          background: linear-gradient(90deg, #38bdf8 0%, #007BFF 100%);
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .code-btn:hover::after {
          width: 100%;
        }
        .code-btn:active {
          animation: codePulse 0.3s;
        }
        @keyframes codePulse {
          0% { box-shadow: 0 0 0 0 #38bdf8; }
          70% { box-shadow: 0 0 0 8px #38bdf822; }
          100% { box-shadow: 0 0 0 0 #38bdf8; }
        }
      `}</style>
    </motion.section>
  );
};