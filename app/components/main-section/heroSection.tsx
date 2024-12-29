import React from "react";
import Button from "../button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="hero-section relative  md:pt-44 pt-32 px-2 -top-[80px] overflow-hidden"
      id="home"
    >
      <section className="hero-content flex flex-col justify-evenly lg:gap-16 md:gap-16 gap-8">
        <section className="text-section flex flex-col items-center justify-center text-center text-white">
          <h2 className="md:text-4xl text-1xl font-bold ">
            Hult Acem presents
          </h2>
          <h1 className="md:text-8xl text-4xl font-bold text-primary">
            Hult Prize onCampus
          </h1>
          <p className="md:text-2xl text-lg mt-4 font-medium">
            Empowering the Next Generation of Social Entrepreneurs
          </p>
          <br />
          <Button
            link={
              "https://www.hultprize.org/startup-pre-registration-is-now-open/"
            }
          />
        </section>
        <section className="logos-section flex justify-center flex-wrap items-center gap-10">
          <span className="md:w-[300px] ">
            <Image
              src={"/hult-main-logo.png"}
              alt={""}
              sizes="(max-width: 568px) 100vw, (max-width: 500px) 50vw, 33vw"
              width={300}
              height={300}
            />
          </span>
          <span className="md:w-[120px] ">
            <Image
              src={"/hult-acem.png"}
              alt={""}
              sizes="(max-width: 568px) 100vw, (max-width: 500px) 50vw, 33vw"
              width={120}
              height={120}
            />
          </span>
          <span className="md:w-[300px] ">
            <Image
              src={"/onCampus.png"}
              alt={""}
              sizes="(max-width: 568px) 100vw, (max-width: 500px) 50vw, 33vw"
              width={300}
              height={300}
            />
          </span>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
