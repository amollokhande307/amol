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
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1800);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Magnetic effect for form inputs
  const MagneticInput: React.FC<{ 
    type: string; 
    id: string; 
    name: string; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
    placeholder: string; 
    required?: boolean; 
    rows?: number;
  }> = ({ type, id, name, value, onChange, placeholder, required = false, rows }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-20, 20], [2, -2]);
    const rotateY = useTransform(x, [-20, 20], [-2, 2]);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const InputComponent = type === 'textarea' ? 'textarea' : 'input';
    
    return (
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="magnetic-input-container"
      >
        <motion.div style={{ transform: "translateZ(5px)" }}>
          <InputComponent
            type={type === 'textarea' ? undefined : type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className="w-full px-4 py-3 royal-luxury-card rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-500 text-white placeholder-gray-300 bg-[#1e2233] border border-[#2d3650] focus:shadow-glow input-glow"
            placeholder={placeholder}
          />
        </motion.div>
      </motion.div>
    );
  };

  // Magnetic effect for submit button
  const MagneticSubmitButton: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-30, 30], [5, -5]);
    const rotateY = useTransform(x, [-30, 30], [-5, 5]);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };
    
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        type="submit"
        className="magnetic-submit-btn"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div style={{ transform: "translateZ(10px)" }} className="flex items-center gap-2">
          <Send className="w-5 h-5" />
          {submitted ? 'Message Sent!' : 'Send Message'}
        </motion.div>
      </motion.button>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden contact-gradient-bg font-['Inter','Poppins',sans-serif] min-h-[80vh]">
      {/* Animated Stars/Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(32)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20 animate-star"
            style={{
              width: `${4 + Math.random() * 4}px`,
              height: `${4 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
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
                <div className="p-3 bg-blue-100 dark:bg-purple-900/30 rounded-full relative">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 cursor-pointer" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-10 top-1/2 -translate-y-1/2 bg-[#22223b] text-white px-4 py-2 rounded-lg shadow-lg text-xs font-semibold whitespace-nowrap z-20"
                      >
                        📍Chh Sambhaji Nagar
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                <MagneticInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-navy dark:text-yellow-200 mb-2">
                  Email
                </label>
                <MagneticInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-royal-navy dark:text-yellow-200 mb-2">
                  Message
                </label>
                <MagneticInput
                  type="textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                />
              </div>
              <MagneticSubmitButton />
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .contact-gradient-bg {
          background: linear-gradient(135deg, #18181b 0%, #19376d 100%);
        }
        .focus:shadow-glow:focus {
          box-shadow: 0 0 0 3px #38bdf8cc, 0 2px 8px #007BFF33;
          border-color: #38bdf8;
        }
        .input-glow:focus {
          outline: none;
          box-shadow: 0 0 0 3px #38bdf8cc, 0 2px 8px #007BFF33;
          border-color: #38bdf8;
        }
        .animate-star {
          animation: starFloat 6s linear infinite alternate;
        }
        @keyframes starFloat {
          0% { transform: translateY(0); opacity: 0.7; }
          100% { transform: translateY(-24px); opacity: 0.3; }
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .magnetic-input-container {
          transform-style: preserve-3d;
          perspective: 600px;
        }
        .magnetic-submit-btn {
          background: linear-gradient(135deg, #007BFF, #38bdf8);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          padding: 0.75rem 2rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          perspective: 800px;
        }
        .magnetic-submit-btn:hover {
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }
      `}</style>
    </section>
  );
};