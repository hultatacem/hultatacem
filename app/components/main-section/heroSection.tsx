import React from "react";
import Button from "../button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="hero-section relative flex items-center justify-center min-h-screen overflow-hidden md:p-20"
      id="home"
    >
      <section className="hero-content flex flex-col justify-evenly gap-8 md:gap-16">
        <section className="text-section flex flex-col items-center justify-center text-center text-white">
          <h2 className="font-bold text-[clamp(1.5rem,3vw,3rem)]">
            Hult Acem presents
          </h2>
          <h1 className="text-primary font-bold text-[clamp(2rem,5vw,6rem)]">
            Hult Prize onCampus
          </h1>
          <p className="mt-4 font-medium text-[clamp(1rem,2.5vw,1.8rem)]">
            Empowering the Next Generation of Social Entrepreneurs
          </p>
          <br />
          {/* <Button
            link={
              "https://www.hultprize.org/startup-pre-registration-is-now-open/"
            }
          /> */}
        </section>
        <section className="logos-section flex justify-center flex-wrap items-center gap-10">
          <span className="w-[clamp(100px,30vw,300px)]">
            <Image
              src={"/hult-main-logo.png"}
              alt="Hult Logo"
              width={400}
              height={400}
            />
          </span>
          <span className="w-[clamp(100px,20vw,130px)]">
            <Image
              src={"/hult-acem.png"}
              alt="Hult Acem"
              width={150}
              height={150}
            />
          </span>
          <span className="w-[clamp(100px,30vw,300px)]">
            <Image
              src={"/onCampus.png"}
              alt="On Campus"
              width={400}
              height={400}
            />
          </span>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
