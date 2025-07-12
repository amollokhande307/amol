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

export const Skills: React.FC = () => {
  const skills = [
    { name: 'DevOps', icon: Zap, level: 'Advanced', color: 'text-blue-500' },
    { name: 'Cloud Computing', icon: Cloud, level: 'Advanced', color: 'text-blue-600' },
    { name: 'Docker', icon: Container, level: 'Advanced', color: 'text-blue-700' },
    { name: 'Python', icon: Code, level: 'Intermediate', color: 'text-green-500' },
    { name: 'C Programming', icon: Terminal, level: 'Intermediate', color: 'text-gray-600' },
    { name: 'Linux', icon: Server, level: 'Advanced', color: 'text-orange-500' },
    { name: 'AWS', icon: Database, level: 'Intermediate', color: 'text-orange-600' },
    { name: 'AI/ML', icon: Cpu, level: 'Learning', color: 'text-purple-500' }
  ];

  const tools = [
    'Docker', 'GitHub', 'AWS', 'Python', 'Linux', 'Bash', 'Terraform', 'Kubernetes'
  ];

  return (
    <section className="py-20 relative overflow-hidden royal-section-bg-light dark:royal-section-bg-dark royal-ornamental-border">
      {/* Professional Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 royal-elegant-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 royal-elegant-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 royal-elegant-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-royal-black dark:text-yellow-200 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 royal-luxury-card rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <skill.icon className={`w-8 h-8 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-royal-navy dark:text-royal-yellow mb-2">
                  {skill.name}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-royal-black dark:text-yellow-300">
                    {skill.level}
                  </span>
                </div>
              </div>
              
              {/* Skill level bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-b-xl overflow-hidden">
                <div 
                  className={`h-full bg-blue-600 transition-all duration-500 group-hover:w-full`}
                  style={{ 
                    width: skill.level === 'Advanced' ? '90%' : 
                           skill.level === 'Intermediate' ? '70%' : '40%' 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-royal-navy dark:text-royal-yellow mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={tool}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-royal-navy dark:text-yellow-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};