import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

import Dropdown from "./dropdown";
import {
  bgImage,
  description,
  heading,
  socialAnalytics,
  tag,
  info,
  cardStyle3,
} from "@/assets/Journey/content";
import SocialCard from "./socialCard";

export default function Journey() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <section className="overflow-x-hidden overflow-y-hidden" id="journey">
      <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[55rem] md:h-[65rem] lg:h-[55rem] justify-center items-center">
        <div
          className="flex flex-col justify-center items-start ml-0  
          lg:mt-0 lg:ml-36 lg:flex-row lg:items-center h-full "
        >
          <div
            className="z-30 flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <div className="absolute flex flex-row justify-center items-center w-[20rem] lg:w-[25rem] flex-wrap">
              {socialAnalytics.map((item, key) => (
                <SocialCard
                  key={item._id}
                  item={item}
                />
              ))}
            </div>
            <Image
              src={bgImage}
              width={300}
              height={300}
              alt="background-image"
              className="w-[20.5rem] h-[21rem] md:w-[32rem] md:h-[30rem] lg:w-[40rem] lg:h-[27rem] rounded-xl"
            />
          </div>

          <div
            className="backdrop-opacity-10 bg-[#474543]/60 w-[21.5rem] p-7 h-auto rounded-xl mt-[-3rem] pt-20
          flex flex-col justify-center items-center md:w-[32rem] lg:w-[56rem] lg:items-start lg:ml-[-5rem] lg:p-16 lg:pl-32 ease-in-out"
            data-aos="fade-left"
          >
            <p className="uppercase secondary-text text-lg tracking-widest text-center lg:text-left">
              {tag}
            </p>
            <h1
              className="w-[15rem]  bg-gradient-to-r from-[#F69F21] to-[#EE7C08] leading-9
                text-transparent bg-clip-text text-2xl md:text-4xl py-3 pb-5 text-center md:w-[20rem] lg:text-left"
            >
              {heading}
            </h1>
            <p className="w-[15rem] md:w-[32rem] text-sm md:text-lg secondary-text tracking-widest text-center lg:text-left">
              {description}
            </p>

            <div className="mb-10 pt-5">
              {info.map((item, key) => (
                <Dropdown item={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
