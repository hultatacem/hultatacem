import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled: boolean;
  children: React.ReactNode;
}

const Button = ({ onClick, className, disabled, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` text-white px-4 py-3 rounded-xl font-semibold md:text-lg  text-sm ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
