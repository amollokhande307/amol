import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type MagneticButtonProps = {
  as?: 'button' | 'a';
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

const MagneticButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, MagneticButtonProps>(
  ({ as = 'button', children, className = '', ...props }, ref) => {
    if (as === 'a') {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={className} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={className} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }
);

export default MagneticButton; 