"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Facebook01Icon, InstagramIcon, Linkedin01Icon } from "hugeicons-react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const threshold = 50; // Threshold for considering the page as "scrolled to bottom"
  const debounceTime = 500; // Increased debounce delay for smoother behavior
  const hysteresis = 400; // Hysteresis to prevent rapid toggling

  const handleScroll = useCallback(() => {
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
  }, [threshold, hysteresis]);

  useEffect(() => {
    const debouncedScroll = () => setTimeout(handleScroll, debounceTime);

    window.addEventListener("scroll", debouncedScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [handleScroll, debounceTime]);

  return (
    <footer
      className={`${
        isExpanded
          ? "h-auto w-full md:p-10 md:px-16 px-8 p-4"
          : "h-16 w-44 sticky bottom-4"
      } row-start-3 flex gap-20 flex-nowrap items-center text-white bg-primary p-4 rounded-3xl justify-evenly transition-all duration-700 mx-auto overflow-hidden flex-col md:flex-row mt-34`}
    >
      <div
        className={` items-center hidden gap-4 float-left left-0 ${
          isExpanded ? "md:flex md:min-w-[100px]" : "hidden"
        }`}
      >
        <Image src="footerlogo.svg" alt="logo" width={150} height={150} />
      </div>
      <span className="md:flex  items-center gap-4 hidden">
        <p className={`${isExpanded ? "" : "hidden "} font-bold text-xl`}>
          Follow us:{" "}
        </p>{" "}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/hultatacem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/hultatacem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin01Icon />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/hultatacem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook01Icon />
        </a>
      </span>
      <span className="flex md:hidden flex-col mobile-footer gap-2">
        <div
          className={`flex items-center min-w-8 min-h-10 gap-4 float-left left-0 ${
            isExpanded ? "" : "hidden"
          }`}
        >
          <Image src="footerlogo.svg" alt="logo" width={150} height={150} />
        </div>
        <span className="flex-col items-center gap-2 flex">
          <p className={`${isExpanded ? "" : "hidden"} font-extrabold`}>
            Follow us:{" "}
          </p>{" "}
          <span
            className="flex
           gap-4"
          >
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/hultatacem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/hultatacem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin01Icon />
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.instagram.com/hultatacem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook01Icon />
            </a>
          </span>
        </span>
      </span>
      <span className={`flex flex-col gap-2 ${isExpanded ? "" : "hidden"}`}>
        <h1 className="font-bold text-xl">Contact Us</h1>
        <p>
          <a href="mailto:hultatacem@acem.edu.np">hultatacem@acem.edu.np</a>
        </p>
        <p>Outreach and Engagement Cordinator</p>
        <p>Niraj Bhattarai: +977 9863208052</p>
        <p>Saugat Wasti: +977 9865458319</p>
      </span>
    </footer>
  );
};

export default Footer;
