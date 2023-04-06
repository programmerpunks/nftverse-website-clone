import Image from "next/image";

import {
  cards,
  containerImage,
  description,
  heading,
  tag,
} from "@/assets/Roadmap/content";
import Card from "./card";

export default function Roadmap() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="flex bg-[url('/assets/images/dots.png')] bg-cover w-full h-[50rem] ">
        <div className="flex bg-[url('/assets/images/dots.png')] bg-cover w-full h-full "></div>
        <div className="flex flex-row justify-start items-start rotate-[150deg] absolute ml-[-35rem] mt-[-8rem]">
          <Image
            src="/assets/images/l-blur-green.png"
            alt="Background Image"
            width={1000}
            height={1000}
            className="blur-lg opacity-70"
          />
          <Image
            src="/assets/images/s-blur-orange.png"
            alt="Overlay Image"
            width={700}
            height={700}
            className="absolute blur-lg opacity-70"
          />
        </div>

        <div className="flex flex-col absolute items-center w-full px-[20rem] mt-20 md:mt-44 md:flex-row">
          <div className="flex flex-col justify-center">
            <p className="font-Montserrat uppercase secondary-text tracking-widest md:text-left">
              {tag}
            </p>
            <h1
              className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-4xl py-3 text-center md:text-left"
            >
              {heading}
            </h1>
            <p
              className="text-[15px] w-[20rem] mt-3 secondary-text text-center 
               md:w-[18rem] xl:text-[17px] xl:w-[23rem] md:text-left"
            >
              {description}
            </p>
            <Image
              src={containerImage}
              width={300}
              height={300}
              className="w-[22rem] mt-16"
            />
          </div>
        </div>

       
        <div className="">
        {cards.map((item, key) => (
            <Card item={item} key={key} delay={100 * (key + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
