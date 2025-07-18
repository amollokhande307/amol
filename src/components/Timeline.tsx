import React from 'react';
import { GraduationCap, Code, Target, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  const timelineItems = [
    {
      icon: GraduationCap,
      title: 'Education',
      subtitle: 'B.Sc. Computer Science',
      description: 'Pursuing Bachelor of Science in Computer Science at MGM University, building strong foundations in programming and software development.',
      date: 'Present',
      color: 'text-blue-500'
    },
    {
      icon: Code,
      title: 'Docker Menu-Based Project',
      subtitle: 'DevOps Implementation',
      description: 'Developed a comprehensive Docker-based menu system for container management, demonstrating practical DevOps skills and automation.',
      date: '2024',
      color: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Agentic AI Project',
      subtitle: 'AI Integration',
      description: 'Created an intelligent agent system combining AI capabilities with practical applications, showcasing innovation in emerging technologies.',
      date: '2024',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      title: 'Future Goals',
      subtitle: 'Career Aspirations',
      description: 'Master Cloud-Native DevOps practices and contribute to Open Source AI Operations tools, making a meaningful impact in the tech community.',
      date: 'Future',
      color: 'text-orange-500'
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, staggerChildren: 0.13 }
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="py-20 relative overflow-hidden royal-section-bg-light dark:royal-section-bg-dark royal-ornamental-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={timelineVariants}
    >
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-10 w-28 h-28 royal-elegant-float"></div>
        <div className="absolute bottom-1/4 right-10 w-36 h-36 royal-elegant-float" style={{ animationDelay: '4s' }}></div>
        <div className="royal-accent-lines"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
            My Journey
          </h2>
          <p className="text-lg text-royal-black dark:text-yellow-200 max-w-2xl mx-auto">
            From student to DevOps enthusiast - tracking my growth and future aspirations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 dark:bg-yellow-500 transform -translate-x-1/2 hidden md:block" />
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-8 w-4 h-4 bg-yellow-100 dark:bg-gray-800 border-4 border-blue-900 rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="group p-6 royal-luxury-card rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl royal-tech-glow">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${item.color.includes('blue') ? 'bg-blue-900/20' : item.color.includes('yellow') ? 'bg-yellow-500/20' : item.color.replace('text-', 'bg-')}/20 mr-4`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-royal-navy dark:text-royal-yellow">
                        {item.title}
                      </h3>
                      <p className="text-sm text-royal-black dark:text-yellow-300 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-royal-black dark:text-yellow-200 mb-3">
                    {item.subtitle}
                  </h4>
                  
                  <p className="text-royal-black dark:text-yellow-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};