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
    Aos.init({ duration: 1000, offset: 300 });
  }, []);
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[35rem] md:h-[45rem]">
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

        <div className="flex flex-col absolute items-center w-full mt-28"  data-aos="fade-up">
          <Image
            src={bgImage}
            width={300}
            height={600}
            className="w-[20rem] h-[17rem] md:h-auto md:w-[66rem] h-auto rounded-lg border border-[#404142]"
          />
          <div className="absolute flex flex-col justify-center items-center mt-28 md:mt-32">
            <div className="flex flex-col justify-center items-center">
              <h1
                className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
            text-transparent bg-clip-text text-xl md:text-4xl py-3 text-center"
              >
                {heading}
              </h1>
              <p className="w-[16rem] text-sm md:text-md md:w-[40rem] text-center secondary-text tracking-widest">
                {description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-14 md:mt-7">
              <input
                className="backdrop-opacity-10 bg-[#9A9FA2]/50 p-4 w-[20rem] md:w-[27rem] rounded-full"
                placeholder="Your Email"
              />
              <button
                className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08] p-3 px-10 mb-4 text-white font-bold font-Sora
                rounded-full border border-[#E38D11] md:mr-6 md:mb-0 mt-6 md:mt-0"
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
