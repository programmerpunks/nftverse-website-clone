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
} from "@/assets/Journey/content";
import SocialCard from "./socialCard";

export default function Journey() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 300 });
  }, []);

  return (
    <section className="my-10">
      <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[55rem] lg:h-[35rem] flex items-center justify-center">
        <div className="flex flex-col justify-center items-start w-full my-52 lg:mt-0 md:ml-36 md:flex-row md:items-center">
          <div className="z-30 flex flex-col justify-center ">
            <div className="absolute flex flex-col justify-center items-center w-[30rem]">
              {socialAnalytics.map((item) => (
                <SocialCard key={item._id} item={item} />
              ))}
            </div>
            <Image
              src={bgImage}
              width={300}
              height={300}
              className="w-[20rem] h-[22rem]  lg:w-[40rem] lg:h-[29rem] rounded-xl"
            />
          </div>

          <div
            className="backdrop-opacity-10 bg-[#474543]/70 w-[20rem] lg:w-[56rem] p-7 lg:p-16  h-auto rounded-xl lg:ml-[-5rem] 
          flex flex-col justify-center items-center lg:pl-32 ease-in-out"
          >
            <p className="uppercase secondary-text text-lg tracking-widest text-center lg:text-left">
              {tag}
            </p>
            <h1
              className="w-[15rem] lg:w-[20rem] bg-gradient-to-r from-[#F69F21] to-[#EE7C08] leading-9
                text-transparent bg-clip-text text-2xl md:text-4xl py-3 pb-5 text-center lg:text-left"
            >
              {heading}
            </h1>
            <p className="w-[15rem] lg:w-[32rem] text-sm md:text-lg secondary-text tracking-widest text-center lg:text-left">
              {description}
            </p>

            <div>
              {info.map((item, key) => (
                <Dropdown item={item} delay={(key + 1) * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
