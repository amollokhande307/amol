import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="lottie-wrapper">
        {/* Main Robot Animation */}
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_9wpyhdzo.json"
          style={{ height: '180px', width: '180px' }}
        />
        
        {/* AWS Cloud Infrastructure Animation */}
        <div className="aws-cloud-infrastructure">
          {/* Floating Cloud Icons */}
          <motion.div
            className="cloud cloud1"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 8c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" fill="#FF9900"/>
              <path d="M12 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#FF9900"/>
              <path d="M28 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#FF9900"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="cloud cloud2"
            animate={{ 
              y: [0, -15, 0],
              x: [0, -15, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35">
              <path d="M17.5 6c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" fill="#FF9900"/>
              <path d="M10 18c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" fill="#FF9900"/>
              <path d="M25 18c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" fill="#FF9900"/>
            </svg>
          </motion.div>
          
          {/* Spinning AWS Logo */}
          <motion.div
            className="aws-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50">
              <ellipse cx="25" cy="25" rx="25" ry="25" fill="#FF9900"/>
              <path d="M12 30l13-20 13 20H12z" fill="#fff"/>
              <path d="M18 25l7-10 7 10H18z" fill="#FF9900"/>
            </svg>
          </motion.div>
        </div>
        
        {/* DevOps CI/CD Pipeline Loop */}
        <div className="devops-cicd-pipeline">
          {/* Rotating Gears */}
          <motion.div
            className="gear gear1"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <svg width="45" height="45" viewBox="0 0 45 45">
              <circle cx="22.5" cy="22.5" r="22.5" fill="#38bdf8" opacity="0.8"/>
              <path d="M22.5 0C24.5 0 26 1.5 26 3.5C26 5.5 24.5 7 22.5 7C20.5 7 19 5.5 19 3.5C19 1.5 20.5 0 22.5 0ZM22.5 38C24.5 38 26 39.5 26 41.5C26 43.5 24.5 45 22.5 45C20.5 45 19 43.5 19 41.5C19 39.5 20.5 38 22.5 38ZM41.5 22.5C43.5 22.5 45 24 45 26C45 28 43.5 29.5 41.5 29.5C39.5 29.5 38 28 38 26C38 24 39.5 22.5 41.5 22.5ZM3.5 22.5C5.5 22.5 7 24 7 26C7 28 5.5 29.5 3.5 29.5C1.5 29.5 0 28 0 26C0 24 1.5 22.5 3.5 22.5Z" fill="#007BFF"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="gear gear2"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <svg width="35" height="35" viewBox="0 0 35 35">
              <circle cx="17.5" cy="17.5" r="17.5" fill="#38bdf8" opacity="0.6"/>
              <path d="M17.5 0C19.2 0 20.5 1.3 20.5 3C20.5 4.7 19.2 6 17.5 6C15.8 6 14.5 4.7 14.5 3C14.5 1.3 15.8 0 17.5 0ZM17.5 29C19.2 29 20.5 30.3 20.5 32C20.5 33.7 19.2 35 17.5 35C15.8 35 14.5 33.7 14.5 32C14.5 30.3 15.8 29 17.5 29ZM32 17.5C33.7 17.5 35 18.8 35 20.5C35 22.2 33.7 23.5 32 23.5C30.3 23.5 29 22.2 29 20.5C29 18.8 30.3 17.5 32 17.5ZM3 17.5C4.7 17.5 6 18.8 6 20.5C6 22.2 4.7 23.5 3 23.5C1.3 23.5 0 22.2 0 20.5C0 18.8 1.3 17.5 3 17.5Z" fill="#007BFF"/>
            </svg>
          </motion.div>
          
          {/* CI/CD Arrows */}
          <motion.div
            className="cicd-arrow arrow1"
            animate={{ 
              x: [0, 25, 0], 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="25" height="25" viewBox="0 0 25 25">
              <path d="M0 12.5L18 0V8H25V17H18V25L0 12.5Z" fill="#38bdf8"/>
            </svg>
          </motion.div>
          
          <motion.div
            className="cicd-arrow arrow2"
            animate={{ 
              x: [0, -25, 0], 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <svg width="25" height="25" viewBox="0 0 25 25">
              <path d="M25 12.5L7 0V8H0V17H7V25L25 12.5Z" fill="#007BFF"/>
            </svg>
          </motion.div>
          
          {/* Animated Server Nodes */}
          <motion.div
            className="server-node node1"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <div className="server-icon">🖥️</div>
          </motion.div>
          
          <motion.div
            className="server-node node2"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="server-icon">🖥️</div>
          </motion.div>
        </div>
        
        {/* Container Deployment Flow */}
        <div className="container-deployment">
          <motion.div
            className="container container1"
            animate={{ 
              x: [-50, 50],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0
            }}
          >
            <div className="container-icon">📦</div>
          </motion.div>
          
          <motion.div
            className="container container2"
            animate={{ 
              x: [-50, 50],
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="container-icon">📦</div>
          </motion.div>
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
          overflow: visible;
        }
        .lottie-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
          width: 400px;
          height: 400px;
          overflow: visible;
        }
        
        /* AWS Cloud Infrastructure */
        .aws-cloud-infrastructure {
          position: absolute;
          top: -60px;
          left: -60px;
          width: 520px;
          height: 520px;
          pointer-events: none;
          z-index: 10;
          overflow: visible;
        }
        .cloud {
          position: absolute;
          filter: drop-shadow(0 0 12px #FF9900);
          z-index: 12;
          opacity: 1;
          visibility: visible;
        }
        .cloud1 {
          top: 30px;
          left: 30px;
        }
        .cloud2 {
          top: 80px;
          right: 40px;
        }
        .aws-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 15px #FF9900);
          z-index: 13;
          opacity: 1;
          visibility: visible;
        }
        
        /* DevOps CI/CD Pipeline */
        .devops-cicd-pipeline {
          position: absolute;
          top: -40px;
          left: -40px;
          width: 480px;
          height: 480px;
          pointer-events: none;
          z-index: 15;
          overflow: visible;
        }
        .gear {
          position: absolute;
          filter: drop-shadow(0 0 10px #38bdf8);
          z-index: 16;
          opacity: 1;
          visibility: visible;
        }
        .gear1 {
          top: 50px;
          left: 50px;
        }
        .gear2 {
          top: 100px;
          left: 100px;
        }
        .cicd-arrow {
          position: absolute;
          filter: drop-shadow(0 0 6px #007BFF);
        }
        .arrow1 {
          top: 70px;
          left: 150px;
        }
        .arrow2 {
          top: 120px;
          left: 70px;
        }
        .server-node {
          position: absolute;
          filter: drop-shadow(0 0 8px #38bdf8);
        }
        .node1 {
          top: 30px;
          right: 30px;
        }
        .node2 {
          bottom: 30px;
          left: 30px;
        }
        .server-icon {
          font-size: 24px;
          filter: drop-shadow(0 0 4px #38bdf8);
        }
        
        /* Container Deployment */
        .container-deployment {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 440px;
          height: 440px;
          pointer-events: none;
          z-index: 20;
          overflow: visible;
        }
        .container {
          position: absolute;
          filter: drop-shadow(0 0 8px #38bdf8);
        }
        .container1 {
          top: 60px;
          left: 60px;
        }
        .container2 {
          bottom: 60px;
          right: 60px;
        }
        .container-icon {
          font-size: 20px;
          filter: drop-shadow(0 0 4px #38bdf8);
        }
        

        
        .welcome-text {
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 20px #19376d88;
          letter-spacing: 1.5px;
          font-family: 'Poppins', 'Inter', sans-serif;
          text-align: center;
          margin-top: 1rem;
        }
        
        @media (max-width: 768px) {
          .lottie-wrapper {
            width: 300px;
            height: 300px;
            margin-bottom: 1rem;
          }
          .welcome-text {
            font-size: 1.4rem;
            letter-spacing: 1px;
          }
          .aws-cloud-infrastructure {
            width: 380px;
            height: 380px;
            top: -40px;
            left: -40px;
          }
          .devops-cicd-pipeline {
            width: 360px;
            height: 360px;
            top: -30px;
            left: -30px;
          }
          .container-deployment {
            width: 320px;
            height: 320px;
            top: -20px;
            left: -20px;
          }

          .cloud1, .cloud2 {
            transform: scale(0.8) !important;
          }
          .aws-logo {
            transform: translate(-50%, -50%) scale(0.8) !important;
          }
        }
        
        @media (max-width: 480px) {
          .lottie-wrapper {
            width: 250px;
            height: 250px;
          }
          .welcome-text {
            font-size: 1.2rem;
          }
          .aws-cloud-infrastructure {
            width: 300px;
            height: 300px;
            top: -25px;
            left: -25px;
          }
          .devops-cicd-pipeline {
            width: 280px;
            height: 280px;
            top: -15px;
            left: -15px;
          }
          .container-deployment {
            width: 250px;
            height: 250px;
            top: -10px;
            left: -10px;
          }

        }
      `}</style>
    </div>
  );
};

export default Loading; 