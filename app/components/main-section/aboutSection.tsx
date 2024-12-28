import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div
      className="about-section flex flex-col gap-10 max-w-screen-xl mx-auto px-5"
      id="about"
    >
      <div className="about-content-text ">
        <p className="text-6xl font-bold flex items-center w-full text-dark">
          About<span className="text-primary">.</span>
          <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
        </p>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-2/3">
            <p className="text-xl text-muted mt-10 ">
              <span className="bg-primary float-left text-3xl rounded-md py-2 px-4 text-white mx-1 ">
                H
              </span>
              ult Prize is the world’s largest student competition for social
              good, challenging young people to solve global issues through
              social entrepreneurship. The OnCampus program brings this global
              challenge to universities, offering students the chance to make a
              real impact and win up to $1 million in seed capital.
              <br />
              <br />
              Each year, over 100,000 students from 120+ countries create
              startups aligned with the UN Sustainable Development Goals.
              Winning teams from OnCampus events advance to regional finals,
              with top teams moving to the Hult Prize Accelerator for mentorship
              and funding.
              <br />
              <br />
              Finalists pitch to expert judges, and the winning team receives $1
              million USD to bring their idea to life. Dubbed the "Nobel Prize
              for students", the Hult Prize is featured in The New York Times,
              Forbes, and The Wall Street Journal.
            </p>
          </div>
          <div className="mt-10 side-image ">
            <Image src={"/winner.webp"} width={500} height={500} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
