import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="lottie-wrapper">
        {/* Lottie robot with AWS cloud and DevOps tools */}
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_9wpyhdzo.json" // Example robot Lottie
          style={{ height: '180px', width: '180px' }}
        />
        <div className="devops-icons">
          <img src="/assets/aws.svg" alt="AWS" className="icon" />
          <img src="/assets/docker.svg" alt="Docker" className="icon" />
          <img src="/assets/ci-cd.svg" alt="CI/CD" className="icon" />
        </div>
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
        .devops-icons {
          display: flex;
          gap: 1.2rem;
          margin-top: 1rem;
          justify-content: center;
        }
        .icon {
          width: 36px;
          height: 36px;
          filter: drop-shadow(0 2px 8px #19376d88);
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