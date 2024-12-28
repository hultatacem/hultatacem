import Image from "next/image";
import React from "react";
import Button from "../button";

const Theme = () => {
  return (
    <div className="Theme-section flex flex-col mx-auto gap-10 max-w-screen-xl px-5 mt-32 ">
      <div className="Theme-content-text ">
        <span className="text-3xl font-bold flex items-center text-dark gap-5">
          <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
          <span className="w-full">
            This Year&apos;s Challenge
            <span className="text-primary">.</span>
          </span>
        </span>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="mt-10 side-image hidden md:block">
            <Image src={"/unlimited.webp"} width={500} height={500} alt={""} />
          </div>
          <div className="md:w-2/3">
            <p className="text-xl text-muted text-center mt-10 ">
              <span className="text-5xl md:text-6xl font-bold text-primary  text-center ">
                UNLIMITED!
              </span>
              <br />
              <br />
              This year, you can pitch any idea you have for a social
              enterprise, as long as it is world-changing and aligned with at
              least one of the United Nations Sustainable Development Goals
              (SDGs).
            </p>
          </div>
          <div className="mt-10 side-image mx-auto md:hidden">
            <Image src={"/unlimited.webp"} width={500} height={500} alt={""} />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-32 md:flex-row flex-col text-xl text-center items-center justify-center align-middle">
        <section className="flex mx-auto w-full flex-col gap-5 md:w-1/2 justify-center align-middle items-center">
          <h1 className="text-3xl font-bold text-dark">
            {" "}
            Ready to change the world?
          </h1>
          <p>
            Pre-registration is now open! Sign up to receive information about
            next steps and updates about this year’s competition
          </p>
          <Button
            link={
              "https://www.hultprize.org/startup-pre-registration-is-now-open/"
            }
          />
        </section>
        <section className="md:w-1/2 w-full md:ml-44">
          <Image src={"/changeworld.webp"} width={500} height={500} alt={""} />
        </section>
      </div>
    </div>
  );
};

export default Theme;
