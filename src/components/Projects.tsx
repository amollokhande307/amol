import React from 'react';
import { Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MenuBase',
      description: 'Comprehensive Docker management system with an intuitive menu interface for container orchestration and automation.',
      tech: ['Docker', 'Linux', 'Bash', 'DevOps'],
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'College Student',
      description: 'Interactive dashboard application for managing and visualizing college student information with real-time data processing.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Data Visualization'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bank Manager',
      description: 'AI-powered banking assistant that uses generative AI to provide intelligent customer service and transaction management.',
      tech: ['Python', 'AI/ML', 'OpenAI', 'Flask'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'WhatsApp',
      description: 'Comprehensive toolkit for managing multiple social media platforms with unified analytics and automation features.',
      tech: ['Python', 'API Integration', 'Automation', 'Analytics'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Insta',
      description: 'Modern UI clone of Instagram messenger with real-time chat functionality and responsive design.',
      tech: ['React', 'TypeScript', 'CSS', 'UI/UX'],
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Twitter',
      description: 'Advanced Twitter automation and analytics toolkit built with Tweepy for social media management.',
      tech: ['Python', 'Tweepy', 'Twitter API', 'Data Analysis'],
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const handleRippleClick = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className="py-20 relative overflow-hidden royal-section-bg-light dark:royal-section-bg-dark royal-ornamental-border">
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 royal-textile-pattern"></div>
        <div className="absolute top-10 right-10 w-32 h-32 royal-elegant-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 royal-elegant-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
            My Projects
          </h2>
          <p className="text-lg text-royal-black dark:text-yellow-200 max-w-2xl mx-auto">
            Showcasing my journey in DevOps, AI, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl royal-luxury-card transition-all duration-500 transform hover:scale-105 hover:shadow-2xl project-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-royal-navy dark:text-royal-yellow mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-royal-black dark:text-yellow-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-royal-navy dark:text-yellow-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code Button */}
                <div className="flex justify-center">
                  <a
                    href="https://github.com/amollokhande307/summer-internship-.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRippleClick}
                    className="relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/amollokhande307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};