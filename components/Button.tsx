import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ href, className = '', variant = 'primary', children, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-10 py-4 font-body text-sm tracking-widest uppercase rounded-full transition-all';
  
  const variants = {
    primary: 'bg-white text-primary hover:bg-opacity-90 shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
    secondary: 'bg-surface-container-highest text-primary',
    ghost: '!px-0 !py-0 bg-transparent text-primary hover:text-primary-container',
  };

  const finalClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
}

