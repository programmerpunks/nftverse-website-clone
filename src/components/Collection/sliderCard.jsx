import Image from "next/image";
import { sliderButtonText } from "@/assets/Collection/content";

export default function SliderCard({ item, key }) {
  const { image, title, description } = item;
  return (
    <div
      key={key}
      className="flex flex-col justify-center items-center self-center m-3 "
    >
      <Image
        src={image}
        width={200}
        height={200}
        className="w-[12rem] absolute z-40 mt-[-13rem]"
      />
      <div
        className="flex flex-col justify-center items-center backdrop-opacity-10 bg-[#9A9FA2]/20 
        border border-[#373737] rounded-lg w-full mt-28 z-30  pt-48 pb-10 hover:border-[#777777] cursor-pointer"
      >
        <h1 className="text-white text-center mt-10 text-2xl">{title}</h1>
        <h1 className="text-center text-xl text-[#7E7E7E] mt-3">
          {description}
        </h1>

        <button
          className="font-Montserrat border border-[#B4B7B9] hover:border-[#E38D11] bg-neutral-300/10
        p-3 px-8 rounded-full text-white mt-5"
        >
          {sliderButtonText}
        </button>
      </div>
    </div>
  );
}
