import React from 'react';

// SVG for Luffy's Straw Hat (stylized, simple, and optimized for animation)
const StrawHatSVG = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="straw-hat">
    {/* Hat Brim */}
    <ellipse cx="60" cy="60" rx="50" ry="12" fill="#F4D35E" filter="url(#glow)"/>
    {/* Hat Top */}
    <ellipse cx="60" cy="45" rx="28" ry="18" fill="#F4D35E" stroke="#E9B949" strokeWidth="3"/>
    {/* Red Band */}
    <rect x="32" y="52" width="56" height="8" rx="4" fill="#E63946"/>
    <defs>
      <filter id="glow" x="0" y="48" width="120" height="32" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
  </svg>
);

// Animated wave background (SVG)
const WaveBackground = () => (
  <svg className="wave-bg" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path fill="#19376d" fillOpacity="1">
      <animate attributeName="d" dur="6s" repeatCount="indefinite"
        values="M0,160L60,170C120,180,240,200,360,197C480,194,600,170,720,154C840,138,960,130,1080,144C1200,158,1320,194,1380,208L1440,222L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
        M0,180L60,170C120,160,240,140,360,150C480,160,600,200,720,210C840,220,960,200,1080,180C1200,160,1320,140,1380,130L1440,120L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
        M0,160L60,170C120,180,240,200,360,197C480,194,600,170,720,154C840,138,960,130,1080,144C1200,158,1320,194,1380,208L1440,222L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </path>
  </svg>
);

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <WaveBackground />
      <div className="loading-content">
        <div className="hat-anim">
          <StrawHatSVG />
          {/* Shine effect */}
          <div className="shine" />
        </div>
        <h1 className="welcome-text">Welcome to My Portfolio</h1>
      </div>
      <style>{`
        .loading-container {
          position: fixed;
          z-index: 9999;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(180deg, #19376d 0%, #0a2342 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .wave-bg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100vw;
          height: 40vh;
          z-index: 1;
        }
        .loading-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hat-anim {
          position: relative;
          width: 120px;
          height: 80px;
          margin-bottom: 2rem;
          animation: floatHat 2.5s ease-in-out infinite;
        }
        @keyframes floatHat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .straw-hat {
          filter: drop-shadow(0 0 16px #f4d35e88);
        }
        .shine {
          position: absolute;
          top: 18px;
          left: 30px;
          width: 60px;
          height: 16px;
          background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(2px);
          animation: shineMove 2.5s linear infinite;
        }
        @keyframes shineMove {
          0% { left: 10px; opacity: 0.2; }
          30% { left: 30px; opacity: 0.7; }
          60% { left: 60px; opacity: 0.7; }
          100% { left: 90px; opacity: 0.2; }
        }
        .welcome-text {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 16px #19376d88;
          letter-spacing: 1px;
          margin-top: 0.5rem;
          font-family: 'Poppins', 'Inter', sans-serif;
          text-align: center;
        }
        @media (max-width: 600px) {
          .hat-anim { width: 80px; height: 54px; }
          .welcome-text { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default Loading; 