import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

import { buttonText } from "@/assets/Articles/content";

export default function Card({ item, delay }) {
  const { image, title, description } = item;

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div
      key={item._id}
      className="flex flex-col justify-center items-center self-center m-3 md:w-full md:mt-16 lg:mt-3"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Image
        src={image}
        width={200}
        height={220}
        className="w-[19rem] h-auto absolute z-40 mt-[-17rem] rounded-lg md:w-[35rem] lg:w-[21rem]"
      />
      <div
        className="flex flex-col backdrop-opacity-10 bg-[#9A9FA2]/20 
         border border-[#373737] rounded-lg w-full mt-28 z-30 p-8 pt-32 pb-10 
         hover:border-[#777777] cursor-pointer md:mt-60 lg:mt-28"
      >
        <h1 className="text-white mt-10 text-xl w-[15rem]">{title}</h1>
        <p className="text-md text-[#7E7E7E] mt-5 secondary-text  w-[17rem]">
          {description}
        </p>

        <button
          className="font-Montserrat border border-[#B4B7B9] hover:border-[#E38D11] bg-neutral-300/10
          p-3 px-8 rounded-full text-white mt-8 w-40"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
