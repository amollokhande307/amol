import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  '/assets/aws.svg',
  '/assets/docker.svg',
  '/assets/terraform.svg',
  '/assets/jenkins.svg',
  '/assets/github.svg',
];

const ParticlesBackground: React.FC = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    {icons.map((icon, i) => (
      <motion.img
        key={icon}
        src={icon}
        alt="devops-icon"
        className="absolute"
        style={{
          left: `${10 + (i * 18)}%`,
          top: `${15 + (i * 12)}%`,
          width: 36,
          height: 36,
          opacity: 0.25 + (i * 0.12),
        }}
        animate={{
          y: [0, -32, 0],
          x: [0, 16, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 10 + i * 1.5,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: i * 0.8,
        }}
      />
    ))}
  </div>
);

export default ParticlesBackground; 