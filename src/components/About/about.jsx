import Image from "next/image";

import {
  aboutImage,
  description,
  heading,
  statics,
  tag,
} from "@/assets/About/content";

export default function About() {
  return (
    <section className="flex flex-col p-8 items-center mt-10 md:mt-16 xl:mt-0">
      <div className="flex flex-row justify-center items-center relative">
        <div className="hidden md:block w-48"></div>
        <div className="">
          <p className="font-Montserrat uppercase text-center md:text-left">
            {tag}
          </p>
          <h1
            className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
            text-transparent bg-clip-text text-4xl py-3 text-center md:text-left"
          >
            {heading}
          </h1>
          <p className="text-[15px]  mt-3 secondary-text md:w-[19.4rem] xl:text-[17px] md:w-[30rem] xl:w-[25rem] text-center md:text-left">
            {description}
          </p>
        </div>
      </div>

      <div
        className="p-5 flex flex-col backdrop-opacity-10 border border-[#D8D8D81F] bg-white/10 mt-32
          md:flex-row  md:w-[40rem] xl:w-[50rem] md:h-32 rounded-lg md:mt-12"
      >
        <div className="flex justify-center items-center w-full md:w-56 mt-[-9rem] md:mt-[-12rem] xl:w-64">
          <Image
            src={aboutImage}
            width={200}
            height={200}
            className="w-[8rem] md:w-[12rem] h-auto"
          />
        </div>

        <div className="flex flex-row justify-between items-center md:w-[22rem] xl:w-[25rem]">
          {statics.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center mx-3"
            >
              <h1 className="text-white text-3xl">{item.value}</h1>
              <p className="font-Montserrat">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
