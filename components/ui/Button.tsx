import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white hover:bg-black shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#1A1A1A] border border-gray-200 hover:border-gray-400 hover:bg-gray-50",
    outline: "bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
    ghost: "bg-transparent text-[#1A1A1A] hover:bg-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};