import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

import Card from "./card";
import { cards, description, heading, tag } from "@/assets/Benefit/content";

export default function Benefit() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 300 });
  }, []);

  return (
    <section>
      <div className="flex flex-row overflow-x-hidden overflow-y-hidden">
        <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[45rem] ">
          <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-full "></div>
          <div className="flex flex-row justify-end items-end relative rotate-[150deg] mr-[-29rem] ">
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
            className="flex flex-col absolute items-center w-full mt-20 md:px-64 md:mt-44"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-fit">
                <p className="font-Montserrat uppercase text-center lg:text-left secondary-text tracking-widest">
                  {tag}
                </p>
                <h1
                  className="w-72 bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-4xl py-3 text-center lg:text-left"
                >
                  {heading}
                </h1>
              </div>
              <p className="text-[15px] w-[20rem] mt-3 secondary-text text-center md:ml-14 md:w-[25rem] md:ml-6 xl:text-[17px] xl:w-[35rem]  lg:text-left">
                {description}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-10 md:mt-32">
              {cards.map((item, key) => (
                <Card item={item} key={item.title} delay={100 * (key + 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
