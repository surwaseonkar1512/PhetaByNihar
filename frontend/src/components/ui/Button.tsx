import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-sans font-medium uppercase tracking-wide transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#6E1E18] text-white hover:bg-[#7D201D] shadow-soft hover:shadow-soft-hover',
    secondary: 'bg-white text-[#6E1E18] border-2 border-[#6E1E18] hover:bg-[#F8F3EC]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};
