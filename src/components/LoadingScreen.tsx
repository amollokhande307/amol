import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-1000 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ background: 'linear-gradient(180deg, #0a2342 0%, #19376d 100%)' }}
    >
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: 120 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-wave">
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#38bdf8" fillOpacity="0.5"
          />
          <path
            d="M0,80 C480,40 960,160 1440,80 L1440,120 L0,120 Z"
            fill="#007BFF" fillOpacity="0.7"
          />
        </svg>
        {/* Subtle Ship Silhouette (Going Merry inspired) */}
        <svg viewBox="0 0 120 40" width="80" height="30" className="absolute left-1/2 -translate-x-1/2 bottom-8 animate-ship" style={{zIndex:2}}>
          <g opacity="0.7">
            <ellipse cx="60" cy="35" rx="28" ry="5" fill="#0a2342" />
            <rect x="40" y="20" width="40" height="12" rx="6" fill="#f1f5f9" />
            <rect x="55" y="10" width="10" height="15" rx="2" fill="#fbbf24" />
            <rect x="58" y="5" width="4" height="8" rx="1" fill="#fbbf24" />
            <circle cx="60" cy="8" r="2" fill="#dc2626" />
          </g>
        </svg>
      </div>
      {/* Luffy's Hat (SVG) */}
      <div className="mb-8 relative z-10">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="40" rx="32" ry="10" fill="#eab308" />
          <ellipse cx="40" cy="36" rx="24" ry="10" fill="#fde68a" />
          <rect x="16" y="32" width="48" height="8" rx="4" fill="#dc2626" />
        </svg>
      </div>
      {/* Sea Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20 animate-bubble"
            style={{
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 60}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg z-10 tracking-wide animate-fade-in">Welcome to My Portfolio</h1>
      <style>{`
        .animate-wave {
          animation: waveMove 4s linear infinite alternate;
        }
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-40px); }
        }
        .animate-ship {
          animation: shipFloat 3s ease-in-out infinite alternate;
        }
        @keyframes shipFloat {
          0% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, -10px); }
        }
        .animate-bubble {
          animation: bubbleUp 3.5s linear infinite;
        }
        @keyframes bubbleUp {
          0% { opacity: 0.7; transform: translateY(0) scale(1); }
          80% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-80px) scale(1.2); }
        }
        .animate-fade-in {
          animation: fadeInText 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen; 