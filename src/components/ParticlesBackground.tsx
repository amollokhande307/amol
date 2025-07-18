import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none hidden md:block">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ['#38bdf8', '#007BFF', '#fff'] },
            links: {
              enable: true,
              color: '#38bdf8',
              distance: 120,
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
              attract: { enable: false },
            },
            number: {
              value: 40,
              density: { enable: true, area: 900 },
            },
            opacity: {
              value: 0.18,
              random: true,
              anim: { enable: false },
            },
            shape: {
              type: ['circle', 'star'],
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              anim: { enable: false },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground; 