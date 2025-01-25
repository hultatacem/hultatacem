"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Facebook01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const threshold = 50; // Threshold for considering the page as "scrolled to bottom"
    const debounceTime = window.innerWidth < 768 ? 700 : 500; // Increased debounce delay for smoother behavior
    const hysteresis = 400; // Hysteresis to prevent rapid toggling

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      setIsExpanded((prev) =>
        distanceFromBottom <= threshold
          ? true
          : distanceFromBottom > threshold + hysteresis
          ? false
          : prev
      );
    };

    const debouncedScroll = () => setTimeout(handleScroll, debounceTime);

    window.addEventListener("scroll", debouncedScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  return (
    <footer
      className={`${
        isExpanded ? "h-auto" : "h-16"
      } row-start-3 flex gap-6 flex-wrap items-center text-white bg-primary p-4 rounded-full justify-center transition-all duration-300`}
    >
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Templates
      </a>
    </footer>
  );
};

export default Footer;
