import React, { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const trailCount = 10;
    let positions: { x: number; y: number }[] = Array(trailCount).fill({ x: 0, y: 0 });
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const move = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', move);

    let frame: number;
    const animate = () => {
      positions = [mouse, ...positions.slice(0, trailCount - 1)];
      trailRef.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate3d(${positions[i].x - 8}px, ${positions[i].y - 8}px, 0)`;
          el.style.opacity = `${1 - i / trailCount}`;
        }
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={el => (trailRef.current[i] = el!)}
          className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#007BFF] blur-[2px] shadow-lg transition-opacity duration-200"
          style={{
            opacity: 0,
            transition: 'opacity 0.2s',
            willChange: 'transform, opacity',
            mixBlendMode: 'lighten',
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail; 