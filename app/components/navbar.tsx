"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
  // Smooth Scroll to Section with offset for floating footer
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(`#${id}`);
    const footer = document.querySelector("footer");
    const footerHeight = footer ? footer.offsetHeight + 500 : 0; // Get footer height
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop + footerHeight, // Subtract footer height from scroll position
        behavior: "smooth",
      });
      const delay = window.innerWidth < 768 ? 1500 : 1000;
      setTimeout(() => {
        window.scrollBy({
          top: 800, // Scroll additional 500 pixels
          behavior: "smooth",
        });
      }, delay);
    }
  };

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
        <ul className="nav-links flex gap-6">
          <li
            className={` transition-all duration-300 active:text-primary ${
              activeSection === "home"
                ? "text-primary"
                : "text-muted hover:text-dark"
            }`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={` transition-all duration-300 ${
              activeSection === "about"
                ? "text-primary"
                : "text-muted hover:text-dark"
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={` transition-all duration-300 ${
              activeSection === "faq"
                ? "text-primary"
                : "text-muted hover:text-dark"
            }`}
          >
            <a href="#faq">FAQ</a>
          </li>
          <li
            className={` transition-all duration-300 ${
              activeSection === "contact"
                ? "text-primary"
                : "text-muted hover:text-dark"
            }`}
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
