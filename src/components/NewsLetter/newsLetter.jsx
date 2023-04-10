import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

import {
  bgImage,
  buttonText,
  description,
  heading,
} from "@/assets/NewsLetter/content";

export default function NewsLetter() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[28rem] md:h-[35rem] lg:h-[45rem]">
        <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-full "></div>
        <div className="flex flex-row justify-end items-end relative rotate-[150deg] mr-[-29rem]">
          <Image
            src="/assets/images/l-blur-green.png"
            alt="Background Image"
            width={1000}
            height={1000}
            className="blur-lg opacity-70 "
          />
          <Image
            src="/assets/images/s-blur-orange.png"
            alt="Overlay Image"
            width={600}
            height={600}
            className="absolute blur-xl opacity-90"
          />
        </div>

        <div
          className="flex flex-col absolute items-center w-full mt-28"
          data-aos="fade-up"
        >
          <Image
            src={bgImage}
            width={300}
            height={600}
            alt="background-image"
            className="w-[22rem] h-[19rem] rounded-lg border border-[#404142] md:w-[45rem] md:h-[19rem] lg:h-auto lg:w-[66rem]"
          />
          <div className="absolute flex flex-col justify-center items-center mt-16 md:mt-22 lg:mt-32">
            <div className="flex flex-col justify-center items-center">
              <h1
                className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-xl md:text-4xl py-3 text-center"
              >
                {heading}
              </h1>
              <p className="w-[19rem]  text-xs md:text-lg md:w-[40rem] text-center secondary-text tracking-widest">
                {description}
              </p>
            </div>

            <div className="flex flex-col justify-between items-center w-full mt-4 md:mt-14 md:mt-7 md:flex-row">
              <input
                className="backdrop-opacity-10 bg-[#9A9FA2]/50 w-[18rem] rounded-full p-2 text-center md:text-left md:w-[28rem] md:p-3"
                placeholder="Your Email"
              />
              <button
                className="w-[10rem] bg-gradient-to-r from-[#F69F21] to-[#EE7C08] p-2 px-10 mb-4 mt-6 text-white font-bold font-Sora
                rounded-full border border-[#E38D11] md:mr-6 md:my-0  md:p-3"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
