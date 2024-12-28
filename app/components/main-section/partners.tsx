import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div
      className="about-section flex flex-col gap-10 max-w-screen-xl mx-auto px-5 mt-36"
      id="about"
    >
      <div className="about-content-text ">
        <span className="text-6xl font-bold flex items-center text-dark gap-5">
          <span className="w-[650px]">
            Our Partners
            <span className="text-primary">.</span>
          </span>
          <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
        </span>
        <div className="flex flex-wrap items-center align-middle justify-center gap-10 px-5 py-20">
          <Image
            src="/partners/griffity.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/kalopati.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/griffity.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/kalopati.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/griffity.png"
            width={200}
            height={200}
            alt={"griffity"}
          />{" "}
          <Image
            src="/partners/kalopati.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/griffity.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
          <Image
            src="/partners/kalopati.png"
            width={200}
            height={200}
            alt={"griffity"}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
