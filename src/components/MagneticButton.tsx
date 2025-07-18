import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

type MagneticButtonProps =
  | (MagneticButtonBaseProps & { as?: 'button' })
  | (MagneticButtonBaseProps & { as: 'a'; href: string; [key: string]: any });

function isTouchDevice() {
  return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}

const MagneticButton: React.FC<MagneticButtonProps> = props => {
  const { children, className = '', as = 'button', id, style } = props as any;
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const moveX = (relX - rect.width / 2) * 0.18;
    const moveY = (relY - rect.height / 2) * 0.18;
    x.set(moveX);
    y.set(moveY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref,
    className: `magnetic-btn ${className}`,
    style: { ...style, x: springX, y: springY, willChange: 'transform' },
    id,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (as === 'a') {
    const { href, ...anchorProps } = props as any;
    return (
      <motion.a href={href} {...sharedProps} {...anchorProps}>
        {children}
      </motion.a>
    );
  }
  // Default to button
  return (
    <motion.button type="button" {...sharedProps}>
      {children}
    </motion.button>
  );
};

export default MagneticButton; 