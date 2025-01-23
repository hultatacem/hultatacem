import React from "react";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  return (
    <section
      className="about-section flex flex-col gap-10 max-w-screen-xl mx-auto px-5 mt-36"
      id="contact"
    >
      <div className="about-content-text ">
        <span className="text-3xl md:text-6xl font-bold flex items-center text-dark gap-5">
          <span className="w-[650px]">
            Our Partners
            <span className="text-primary">.</span>
          </span>
          <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
        </span>
        <p className="mt-10">
          We are incredibly grateful for the support and collaboration of our
          partners, who have been instrumental in making our event a success. We
          extend our heartfelt gratitude to each of you for standing by us.
          Together, we’re creating something extraordinary!
        </p>
        <div className="flex flex-wrap items-center align-middle justify-center gap-20 md:px-5 md:py-20 px-1 py-10 mb-32">
          <span className="md:w-[200px] w-[90px]">
            <Image
              src="/partners/Prabhu-Bank.png"
              width={200}
              height={200}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[200px] w-[90px]">
            <Image
              src="/partners/ncell.svg"
              width={200}
              height={200}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[120px] w-[90px]">
            <Link href={"https://www.instagram.com/griffitystudios/"}>
              <Image
                src="/partners/griffity.png"
                width={120}
                height={120}
                alt={"griffity"}
              />
            </Link>
          </span>
          <span className="md:w-[130px] w-[90px]">
            <Image
              src="/partners/aitc.png"
              width={130}
              height={130}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[200px] w-[90px]">
            <Image
              src="/partners/lcknirbana.png"
              width={200}
              height={200}
              alt={"griffity"}
            />{" "}
          </span>
          <span className="md:w-[170px] w-[90px]">
            <Image
              src="/partners/mahakmaha.png"
              width={170}
              height={170}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[200px] w-[90px]">
            <Image
              src="/partners/eruka.png"
              width={200}
              height={200}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[160px] w-[90px]">
            <Image
              src="/partners/chrocet.png"
              width={200}
              height={200}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[150px] w-[60px]">
            <Image
              src="/partners/apple.png"
              width={150}
              height={150}
              alt={"griffity"}
            />
          </span>
          <span className="md:w-[200px] w-[90px]">
            <Image
              src="/partners/kalopati.png"
              width={200}
              height={200}
              alt={"griffity"}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partners;
