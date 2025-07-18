import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="lottie-wrapper">
        {/* Luffy's Straw Hat Lottie animation (replace src with actual Lottie JSON if available) */}
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json" // Placeholder Lottie (replace with Luffy's hat if available)
          style={{ height: '180px', width: '180px' }}
        />
      </div>
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
      <style>{`
        .loading-container {
          position: fixed;
          z-index: 9999;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #19376d 0%, #6d3adf 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lottie-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .welcome-text {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 16px #19376d88;
          letter-spacing: 1px;
          font-family: 'Poppins', 'Inter', sans-serif;
          text-align: center;
        }
        @media (max-width: 600px) {
          .lottie-wrapper { margin-bottom: 1rem; }
          .welcome-text { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  );
};

export default Loading; 