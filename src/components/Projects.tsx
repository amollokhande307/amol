import React from 'react';
import { Github, Linkedin } from 'lucide-react';

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

export const Projects: React.FC = () => {
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

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#19376d] to-[#0a2342] font-['Inter','Poppins',sans-serif]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="relative bg-[#1e293b] bg-opacity-90 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-transform duration-200 cursor-pointer group overflow-hidden project-card"
            onClick={handleRipple}
          >
            <h3 className="text-xl font-bold text-[#38bdf8] mb-2">{project.title}</h3>
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
            <span className="absolute inset-0 pointer-events-none">
              {/* Ripple will be injected here on click */}
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
      `}</style>
    </section>
  );
};