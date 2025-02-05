"use client";
import React from "react";

interface ButtonProps {
  link: string;
  className?: string;
}

const Button = ({ link, className }: ButtonProps) => {
  return (
    <a
      href={link}
      className={`bg-primary text-white px-4 py-3 rounded-xl font-semibold md:text-lg  text-sm ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn More{" "}
    </a>
  );
};

export default Button;
