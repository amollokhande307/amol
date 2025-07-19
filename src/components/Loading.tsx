import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

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
        
        {/* DevOps CI/CD Loop Animation */}
        <div className="devops-cicd-loop">
          <motion.div
            className="gear gear1"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 0C22.2 0 24 1.8 24 4C24 6.2 22.2 8 20 8C17.8 8 16 6.2 16 4C16 1.8 17.8 0 20 0ZM20 32C22.2 32 24 33.8 24 36C24 38.2 22.2 40 20 40C17.8 40 16 38.2 16 36C16 33.8 17.8 32 20 32ZM36 20C38.2 20 40 21.8 40 24C40 26.2 38.2 28 36 28C33.8 28 32 26.2 32 24C32 21.8 33.8 20 36 20ZM4 20C6.2 20 8 21.8 8 24C8 26.2 6.2 28 4 28C1.8 28 0 26.2 0 24C0 21.8 1.8 20 4 20Z" fill="#38bdf8"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="gear gear2"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path d="M15 0C16.7 0 18 1.3 18 3C18 4.7 16.7 6 15 6C13.3 6 12 4.7 12 3C12 1.3 13.3 0 15 0ZM15 24C16.7 24 18 25.3 18 27C18 28.7 16.7 30 15 30C13.3 30 12 28.7 12 27C12 25.3 13.3 24 15 24ZM27 15C28.7 15 30 16.3 30 18C30 19.7 28.7 21 27 21C25.3 21 24 19.7 24 18C24 16.3 25.3 15 27 15ZM3 15C4.7 15 6 16.3 6 18C6 19.7 4.7 21 3 21C1.3 21 0 19.7 0 18C0 16.3 1.3 15 3 15Z" fill="#007BFF"/>
            </svg>
          </motion.div>
          
          {/* CI/CD Arrows */}
          <motion.div
            className="cicd-arrow arrow1"
            animate={{ x: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M0 10L15 0V7H20V13H15V20L0 10Z" fill="#38bdf8"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="cicd-arrow arrow2"
            animate={{ x: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M20 10L5 0V7H0V13H5V20L20 10Z" fill="#007BFF"/>
            </svg>
          </motion.div>
        </div>
        
        {/* Floating DevOps Tools */}
        <div className="floating-tools">
          <motion.img
            src="/assets/aws.svg"
            alt="AWS"
            className="tool-icon aws-icon"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0
            }}
          />
          <motion.img
            src="/assets/docker.svg"
            alt="Docker"
            className="tool-icon docker-icon"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.img
            src="/assets/terraform.svg"
            alt="Terraform"
            className="tool-icon terraform-icon"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.img
            src="/assets/jenkins.svg"
            alt="Jenkins"
            className="tool-icon jenkins-icon"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <motion.img
            src="/assets/github.svg"
            alt="GitHub"
            className="tool-icon github-icon"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
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
          position: relative;
        }
        .devops-cicd-loop {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 220px;
          height: 220px;
          pointer-events: none;
        }
        .gear {
          position: absolute;
          filter: drop-shadow(0 0 8px #38bdf8);
        }
        .gear1 {
          top: 20px;
          left: 20px;
        }
        .gear2 {
          top: 60px;
          left: 60px;
        }
        .cicd-arrow {
          position: absolute;
          filter: drop-shadow(0 0 4px #007BFF);
        }
        .arrow1 {
          top: 40px;
          left: 100px;
        }
        .arrow2 {
          top: 80px;
          left: 40px;
        }
        .floating-tools {
          position: absolute;
          top: -40px;
          left: -40px;
          width: 300px;
          height: 300px;
          pointer-events: none;
        }
        .tool-icon {
          position: absolute;
          width: 32px;
          height: 32px;
          filter: drop-shadow(0 0 6px #38bdf8);
        }
        .aws-icon {
          top: 20px;
          left: 20px;
        }
        .docker-icon {
          top: 20px;
          right: 20px;
        }
        .terraform-icon {
          bottom: 20px;
          left: 20px;
        }
        .jenkins-icon {
          bottom: 20px;
          right: 20px;
        }
        .github-icon {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
          .devops-cicd-loop {
            width: 180px;
            height: 180px;
            top: -10px;
            left: -10px;
          }
          .floating-tools {
            width: 240px;
            height: 240px;
            top: -20px;
            left: -20px;
          }
          .tool-icon {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading; 