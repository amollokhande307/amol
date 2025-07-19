import React, { useRef, useState } from 'react';
import { Github, Linkedin, Code, Database, Cloud, Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'MenuBase',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/manubase.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_vimal-ai-devops-activity-7349015234885398529-dRoy',
    category: 'python',
  },
  {
    title: 'College Student',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/college%20student.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-project-college-student-profile-activity-7346395278616186880-fASR',
    category: 'fullstack',
  },
  {
    title: 'Bank Manager',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/bank%20manager.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-ai-powered-banking-assistant-activity-7346942613884698624-nqnB',
    category: 'devops',
  },
  {
    title: 'WhatsApp',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/whatsapp.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_just-built-whatsapp-message-sender-app-using-activity-7348555003076186113-bhUL',
    category: 'python',
  },
  {
    title: 'Instagram',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/insta.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-streamlit-webdevelopment-activity-7349647561294544896-jd-E',
    category: 'fullstack',
  },
  {
    title: 'Twitter',
    github: '',
    linkedin: '',
    category: 'devops',
  },
  {
    title: 'Call App',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/call.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-twilio-streamlit-activity-7349283860439793664-8YMs',
    category: 'python',
  },
  {
    title: 'Email Tool',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/email.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-smtp-streamlit-activity-7348572146006163457-H6U6',
    category: 'fullstack',
  },
  {
    title: 'All-in-One Communication App',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/python%20menu.py',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_summerinternship-python-streamlit-activity-7350000889304133632-uta_',
    category: 'python',
  },
  {
    title: 'Video Recording & Email Delivery System',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_linuxworld-mentorshipmatters-vimaldagasir-activity-7351544750178496512-XqDt',
    category: 'devops',
  },
  {
    title: 'Grocery Store Finder',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_webdevelopment-javascript-geolocation-activity-7351573926012928000-LGYV',
    category: 'fullstack',
  },
  {
    title: 'Live Location',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/Live%20Location.html',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_webdevelopment-javascript-html-activity-7351210348974080000-rfTy',
    category: 'fullstack',
  },
  {
    title: 'AI-Powered Stock Market Prediction',
    github: 'https://github.com/amollokhande307/summer-internship-/blob/main/AI-Powered%20Stock%20Market%20Prediction.txt',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_aiinfinance-geminiai-streamlit-activity-7350407473926754304-iT8p',
    category: 'ai',
  },
  {
    title: 'Apache Setup',
    github: 'https://github.com/amollokhande307/summer-internship-/tree/main/apache%20setup',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_devops-docker-apache-activity-7350381049182392321-ZTwX',
    category: 'devops',
  },
  {
    title: 'Docker Inside Docker',
    github: '',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_docker-devops-cloudcomputing-activity-7351604170392576002-oeX4',
    category: 'devops',
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
  const rotateX = useTransform(y, v => v);
  const rotateY = useTransform(x, v => v);
  
  // Magnetic effect values
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);
  
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
  
  // Combined 3D tilt and magnetic effect handler
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
    
    // Magnetic effect
    magneticX.set(e.clientX - centerX);
    magneticY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    setTilt(0, 0);
    magneticX.set(0);
    magneticY.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    const xVal = touch.clientX - rect.left;
    const yVal = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = ((yVal - centerY) / centerY) * 5; // Reduced for touch
    const rotateYVal = ((xVal - centerX) / centerX) * -5; // Reduced for touch
    setTilt(rotateXVal, rotateYVal);
    
    // Magnetic effect
    magneticX.set(touch.clientX - centerX);
    magneticY.set(touch.clientY - centerY);
  };

  const handleTouchEnd = () => {
    setTilt(0, 0);
    magneticX.set(0);
    magneticY.set(0);
  };
  
  return (
    <motion.div
      key={project.title}
      ref={cardRef}
      className="relative glass-card bg-opacity-90 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-transform duration-200 cursor-pointer group overflow-hidden project-card min-h-[170px] magnetic-project-card"
      style={{
        rotateX,
        rotateY,
        boxShadow: '0 8px 32px 0 #38bdf855, 0 2px 8px #007BFF33',
        willChange: 'transform',
        backdropFilter: 'blur(14px)',
        background: 'rgba(30, 41, 59, 0.35)',
        border: '1.5px solid rgba(56, 189, 248, 0.18)',
        perspective: 800,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
      <motion.div style={{ transform: "translateZ(15px)" }}>
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
            <motion.a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2 bg-[#22223b] rounded-full hover:bg-[#38bdf8] transition"
              whileTap={{ scale: 0.92 }}
            >
              <Linkedin className="w-5 h-5 text-[#007BFF] group-hover:text-white" />
            </motion.a>
          )}
        </div>
      </motion.div>
      {/* Water Ripple Animation */}
      <span className="absolute inset-0 pointer-events-none">
        {/* Ripple will be injected here on click */}
      </span>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Project categories with icons
  const categories = [
    { id: 'all', name: 'All Projects', icon: Code, color: '#38bdf8' },
    { id: 'python', name: '🐍 Python Projects', icon: Code, color: '#FF6B6B' },
    { id: 'fullstack', name: '🌐 Full Stack Projects', icon: Database, color: '#4ECDC4' },
    { id: 'devops', name: '🐳 Docker & DevOps Projects', icon: Cloud, color: '#45B7D1' },
    { id: 'ai', name: '🧠 Agentic AI Projects', icon: Brain, color: '#96CEB4' }
  ];

  // Filter projects based on category
  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  // Animated Filter Button Component
  const FilterButton: React.FC<{ category: typeof categories[0] }> = ({ category }) => {
    const IconComponent = category.icon;
    
    return (
      <motion.button
        onClick={() => filterProjects(category.id)}
        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: `0 0 20px ${category.color}40`
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 20,
          delay: categories.indexOf(category) * 0.1
        }}
      >
        <motion.div
          className="filter-btn-content"
          whileHover={{ rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <IconComponent className="filter-icon" style={{ color: category.color }} />
          <span className="filter-text">{category.name}</span>
        </motion.div>
        {/* Animated Border */}
        <motion.div
          className="filter-border"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: selectedCategory === category.id ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ backgroundColor: category.color }}
        />
        {/* Glow Effect */}
        <motion.div
          className="filter-glow"
          animate={{ 
            opacity: selectedCategory === category.id ? [0.5, 1, 0.5] : 0,
            scale: selectedCategory === category.id ? [1, 1.1, 1] : 1
          }}
          transition={{ 
            duration: 2, 
            repeat: selectedCategory === category.id ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{ backgroundColor: category.color }}
        />
      </motion.button>
    );
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={projectsVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] opacity-50" />
             <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2338bdf8%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
                 <motion.div
           className="text-center mb-16"
           variants={cardVariants}
         >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            My Projects
          </h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto">
            Explore my diverse portfolio of projects showcasing expertise in Python, Full Stack Development, DevOps, and AI.
          </p>
        </motion.div>

        {/* Project Filter Buttons */}
                 <motion.div
           className="flex flex-wrap justify-center gap-4 mb-12"
           variants={cardVariants}
           initial="hidden"
           animate="visible"
         >
          {categories.map((category) => (
            <FilterButton key={category.id} category={category} />
          ))}
        </motion.div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="w-16 h-16 mx-auto mb-4 text-[#64748b]" />
            <h3 className="text-2xl font-semibold text-[#64748b] mb-2">
              No projects in this category yet
            </h3>
            <p className="text-[#64748b]">
              Check back soon for new projects!
            </p>
          </motion.div>
        )}
      </div>

      <style>{`
        .filter-btn {
          position: relative;
          padding: 12px 24px;
          background: rgba(30, 41, 59, 0.8);
          border: 2px solid rgba(56, 189, 248, 0.2);
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .filter-btn:hover {
          border-color: rgba(56, 189, 248, 0.5);
          background: rgba(30, 41, 59, 0.9);
        }
        .filter-btn.active {
          border-color: rgba(56, 189, 248, 0.8);
          background: rgba(56, 189, 248, 0.1);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }
        .filter-btn-content {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
        }
        .filter-icon {
          width: 20px;
          height: 20px;
        }
        .filter-text {
          font-size: 14px;
          white-space: nowrap;
        }
        .filter-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          transform-origin: left;
        }
        .filter-glow {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }
        .filter-btn.active .filter-glow {
          opacity: 0.3;
        }
        
        @media (max-width: 768px) {
          .filter-btn {
            padding: 10px 16px;
            font-size: 12px;
          }
          .filter-text {
            font-size: 12px;
          }
          .filter-icon {
            width: 16px;
            height: 16px;
          }
        }
        
        @media (max-width: 480px) {
          .filter-btn {
            padding: 8px 12px;
            font-size: 11px;
          }
          .filter-text {
            font-size: 11px;
          }
        }
        
        /* Enhanced Project Card Styles */
        .project-card {
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(0, 123, 255, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .project-card:hover::before {
          opacity: 1;
        }
        
        /* Water Ripple Animation */
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(56, 189, 248, 0.3);
          transform: scale(0);
          animation: ripple 0.7s linear;
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        /* Magnetic Project Card */
        .magnetic-project-card {
          transform-style: preserve-3d;
          perspective: 800px;
        }
      `}</style>
    </motion.section>
  );
};