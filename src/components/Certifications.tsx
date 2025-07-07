import React from 'react';
import { Award, Clock } from 'lucide-react';

export const Certifications: React.FC = () => {
  const platforms = [
    { name: 'AWS', logo: '☁️', color: 'text-orange-500' },
    { name: 'Coursera', logo: '🎓', color: 'text-blue-500' },
    { name: 'Udemy', logo: '📚', color: 'text-purple-500' },
    { name: 'Docker', logo: '🐳', color: 'text-blue-600' },
    { name: 'Kubernetes', logo: '⚙️', color: 'text-blue-700' },
    { name: 'Linux', logo: '🐧', color: 'text-yellow-600' }
  ];

  return (
    <section className="py-20 relative overflow-hidden royal-section-bg-light dark:royal-section-bg-dark royal-ornamental-border">
      {/* Professional Background */}
      <div className="absolute inset-0 opacity-12">
        <div className="royal-textile-pattern"></div>
        <div className="absolute top-20 left-1/4 w-24 h-24 royal-elegant-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 royal-elegant-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
            Certifications
          </h2>
          <p className="text-lg text-royal-black dark:text-yellow-200 max-w-2xl mx-auto">
            Continuous learning and skill validation through industry-recognized certifications
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="royal-luxury-card rounded-2xl p-8 mb-12 royal-tech-glow">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-200 dark:bg-blue-900/50 rounded-full mb-6">
                <Clock className="w-8 h-8 text-blue-900 dark:text-yellow-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
                Certifications Coming Soon
              </h3>
              
              <p className="text-royal-black dark:text-yellow-300 mb-6 max-w-2xl mx-auto">
                Currently pursuing industry certifications in cloud computing, DevOps, and AI/ML. 
                Stay tuned for updates on my certification journey!
              </p>
            </div>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="group p-6 royal-luxury-card rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center royal-tech-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.logo}
                </div>
                <h4 className={`font-semibold ${platform.color.includes('blue') ? 'text-blue-900 dark:text-blue-400' : platform.color.includes('yellow') ? 'text-yellow-600 dark:text-yellow-400' : platform.color} group-hover:scale-105 transition-transform duration-300`}>
                  {platform.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Future Plans */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-200 dark:bg-blue-900/30 text-blue-900 dark:text-yellow-300 rounded-full font-medium">
              <Award className="w-5 h-5" />
              Target: 5+ Certifications by End of 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};