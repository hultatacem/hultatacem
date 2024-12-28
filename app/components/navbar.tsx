"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="nav-section max-w-screen-xl md:text-lg text-base p-2 mx-auto">
      <nav className="flex justify-between items-center">
        <div className="logo">
          <Image
            src={"/hultacemlogo.svg"}
            width={60}
            height={60}
            alt={"logo"}
          />
        </div>
        <ul className="nav-links flex gap-4">
          <li
            className={`hover:text-dark transition-all duration-400 ${
              scrollPosition < 100 ? "text-primary" : "text-muted"
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`hover:text-dark transition-all duration-400 ${
              scrollPosition >= 700 && scrollPosition < 2000
                ? "text-primary"
                : "text-muted"
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`hover:text-dark transition-all duration-400 ${
              scrollPosition >= 2000 && scrollPosition < 3000
                ? "text-primary"
                : "text-muted"
            }`}
          >
            <a href="#faq">FAQ</a>
          </li>
          <li
            className={`hover:text-dark transition-all duration-400 ${
              scrollPosition >= 3000 ? "text-primary" : "text-muted"
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
