import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0f172a]/90 shadow-lg backdrop-blur-md transition-all">
      <div className="container flex items-center justify-between py-3">
        <a href="#hero" className="text-xl font-bold text-[#007BFF] tracking-wide">Amol Lokhande</a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-[#1e293b] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF] transition-colors duration-200 px-2 py-1 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <MagneticButton as="a" href="https://github.com/amollokhande307" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
            <Github className="w-5 h-5 text-[#1e293b] dark:text-white" />
          </MagneticButton>
          <MagneticButton as="a" href="https://www.linkedin.com/in/amol-lokhande-382976361" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
            <Linkedin className="w-5 h-5 text-[#007BFF]" />
          </MagneticButton>
          <MagneticButton as="a" href="mailto:amollokhande8999@gmail.com" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
            <Mail className="w-5 h-5 text-[#1e293b] dark:text-white" />
          </MagneticButton>
        </div>
        <button className="md:hidden p-2 rounded focus:outline-none" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0f172a] shadow-lg border-t border-[#e5e7eb] dark:border-[#1e293b] animate-fade-in-down">
          <div className="flex flex-col gap-4 py-4 px-6">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-[#1e293b] dark:text-white hover:text-[#007BFF] dark:hover:text-[#007BFF] transition-colors duration-200 px-2 py-1 rounded"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <MagneticButton as="a" href="https://github.com/amollokhande307" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
                <Github className="w-5 h-5 text-[#1e293b] dark:text-white" />
              </MagneticButton>
              <MagneticButton as="a" href="https://www.linkedin.com/in/amol-lokhande-382976361" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
                <Linkedin className="w-5 h-5 text-[#007BFF]" />
              </MagneticButton>
              <MagneticButton as="a" href="mailto:amollokhande8999@gmail.com" className="p-2 hover:bg-[#f1f5f9] dark:hover:bg-[#1e293b] rounded-full transition">
                <Mail className="w-5 h-5 text-[#1e293b] dark:text-white" />
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}; 