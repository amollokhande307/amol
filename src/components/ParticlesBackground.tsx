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
          opacity: 0.18 + (i * 0.1),
        }}
        animate={{
          y: [0, -24, 0],
          x: [0, 12, 0],
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 12 + i * 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: i * 1.2,
        }}
      />
    ))}
  </div>
);

export default ParticlesBackground; 