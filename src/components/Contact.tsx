import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram,
  Send,
  MapPin,
  Clock
} from 'lucide-react';
import MagneticButton from './MagneticButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative overflow-hidden royal-section-bg-light dark:royal-section-bg-dark royal-ornamental-border">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="royal-code-pattern"></div>
        <div className="absolute top-1/3 left-20 w-20 h-20 royal-elegant-float"></div>
        <div className="absolute bottom-1/3 right-20 w-28 h-28 royal-elegant-float" style={{ animationDelay: '3.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-royal-navy dark:text-royal-yellow mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-royal-black dark:text-yellow-200 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-royal-navy dark:text-royal-yellow mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 royal-luxury-card rounded-lg transition-all duration-500">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Mail className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-navy dark:text-royal-yellow">Email</h4>
                  <a 
                    href="mailto:amollokhande8999@gmail.com"
                    className="text-royal-black dark:text-yellow-300 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-300"
                  >
                    amollokhande8999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 royal-luxury-card rounded-lg transition-all duration-500">
                <div className="p-3 bg-blue-100 dark:bg-purple-900/30 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-navy dark:text-royal-yellow">Location</h4>
                  <p className="text-royal-black dark:text-yellow-300">Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 royal-luxury-card rounded-lg transition-all duration-500">
                <div className="p-3 bg-blue-100 dark:bg-orange-900/30 rounded-full">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-royal-navy dark:text-royal-yellow">Availability</h4>
                  <p className="text-royal-black dark:text-yellow-300">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-royal-navy dark:text-royal-yellow mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <MagneticButton
                  as="a"
                  href="https://github.com/amollokhande307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <Github className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://www.linkedin.com/in/amol-lokhande-382976361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <Linkedin className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="https://www.instagram.com/amol_lokhande_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <Instagram className="w-5 h-5" />
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-royal-navy dark:text-royal-yellow mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-royal-navy dark:text-yellow-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 royal-luxury-card rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 text-royal-navy dark:text-royal-yellow placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-navy dark:text-yellow-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 royal-luxury-card rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 text-royal-navy dark:text-royal-yellow placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-royal-navy dark:text-yellow-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 royal-luxury-card rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-500 text-royal-navy dark:text-royal-yellow placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton
                type="submit"
                className="relative overflow-hidden w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};