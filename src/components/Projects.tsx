import React, { useRef, useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

// Custom hook for Intersection Observer
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const projects = [
  {
    title: 'MenuBase',
    description: 'A menu-driven Docker management system for easy container orchestration and automation.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_vimal-ai-devops-activity-7349015234885398529-dRoy',
  },
  {
    title: 'College Student',
    description: 'A dashboard for managing and visualizing college student profiles and data.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-project-college-student-profile-activity-7346395278616186880-fASR',
  },
  {
    title: 'Bank Manager',
    description: 'AI-powered banking assistant for intelligent customer service and transaction management.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-ai-powered-banking-assistant-activity-7346942613884698624-nqnB',
  },
  {
    title: 'WhatsApp',
    description: 'A WhatsApp message sender app built with Python and Streamlit.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_just-built-whatsapp-message-sender-app-using-activity-7348555003076186113-bhUL',
  },
  {
    title: 'Instagram',
    description: 'A modern Instagram-like messenger UI with real-time chat and responsive design.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-streamlit-webdevelopment-activity-7349647561294544896-jd-E',
  },
  {
    title: 'Twitter',
    description: 'A Tweepy-based Twitter toolkit for automation and analytics.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-streamlit-tweepy-activity-7349675132459593731-7Zkh',
  },
  {
    title: 'AI-Powered Stock Market Prediction',
    description: 'Stock market prediction using Gemini AI and Streamlit for finance insights.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_aiinfinance-geminiai-streamlit-activity-7350407473926754304-iT8p',
  },
  {
    title: 'Call App',
    description: 'A Python and Twilio-based app for making calls via Streamlit.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-twilio-streamlit-activity-7349283860439793664-8YMs',
  },
  {
    title: 'Email Tool',
    description: 'A Python SMTP email tool with a Streamlit interface for easy sending.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_python-smtp-streamlit-activity-7348572146006163457-H6U6',
  },
  {
    title: 'Apache Webserver in Docker',
    description: 'Deploy and manage Apache webserver in Docker containers for DevOps.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_devops-docker-apache-activity-7350381049182392321-ZTwX',
  },
  {
    title: 'All-in-One Communication App',
    description: 'A unified app for messaging, calling, and emailing, built with Python and Streamlit.',
    linkedin: 'https://www.linkedin.com/posts/amol-lokhande-382976361_summerinternship-python-streamlit-activity-7350000889304133632-uta_',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-[#f7f7f7] dark:bg-[#222]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-[#222] dark:text-white border-b-4 border-[#007BFF] inline-block pb-2">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const [ref, inView] = useInView();
            return (
              <div
                key={project.title}
                ref={ref}
                className={`bg-white dark:bg-[#23272f] rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between min-h-[220px] project-card ${inView ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ borderRadius: 12 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#222] dark:text-white font-poppins">{project.title}</h3>
                  <p className="text-[#333] dark:text-[#ccc] mb-6 text-base font-medium">{project.description}</p>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href="https://github.com/amollokhande307/summer-internship-.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#007BFF] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#0056b3] focus:outline-none"
                    style={{ borderRadius: 8 }}
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#007BFF] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#0056b3] focus:outline-none"
                    style={{ borderRadius: 8 }}
                  >
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};