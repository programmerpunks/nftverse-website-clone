import Image from "next/image";

import { heroImage } from "@/assets/Hero/content/hero";

import her from "../../assets/Hero/images/h1-hero-img.jpg";

import greenBlurBg from "../../assets/Hero/images/l-blur-green.png";
import orangeBlurBg from "../../assets/Hero/images/s-blur-orange.png";

import layerImage from "../../assets/Hero/images/Oval-Bg.png";

import bidLogo from "../../assets/Hero/images/aCombined-Shape.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex justify-center items-center relative ">
        <Image
          src={greenBlurBg}
          alt="Background Image"
          width={650}
          height={650}
          className="blur-lg"
        />
        <Image
          src={orangeBlurBg}
          alt="Overlay Image"
          width={400}
          height={400}
          className="absolute blur-2xl top-60 left-70"
        />
      </div>
      <div className="hero-content flex-col xl:flex-row xl:mt-[-5rem]">
        <div className="flex flex-col items-center  xl:items-start">
          <h1 className="text-3xl text-center xl:text-left md:text-4xl xl:text-6xl text-white leading-snug ">
            Collectible <br />
            visible friends
            <br /> on the Metaverse
          </h1>
          <p className="py-3 w-[18rem] text-[15px] text-center text-[#7E7E7E] whitespace-normal md:py-7  md:w-[30rem] xl:text-left xl:w-[37rem] md:text-[20px]  ">
            Viverra aliquet eget sit amet tellus cras adipiscing enim velit
            egestas dui ornare arcu.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4 justify-center">
            <button className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08] p-3 px-10 mb-4 text-white font-bold rounded-full border border-[#E38D11] md:mr-6 md:mb-0">
              Get Started
            </button>
            <button
              className="self-end ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-300 p-3 px-10  text-white 
                    font-bold rounded-full border border-white hover:shadow-md hover:shadow-[#E38D11]/50 hover:border-[#E38D11]"
            >
              Join Discord
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-7 xl:mt-0">
          <Image
            src={her}
            width={350}
            height={500}
            className="w-[18rem] md:w-[20rem] xl:w-[24rem] rounded-lg shadow-2xl"
          />
          <Image
            src={layerImage}
            width={300}
            height={300}
            className="absolute z30 w-[10rem] ml-[-5rem] mt-[-3rem] md:w-[17rem] md:ml-[-20rem] md:mt-[-15rem] xl:w-[20rem] xl:ml-[-24rem]"
          />
          <div
            class="w-[20rem] md:w-[25rem] xl:w-[30rem] h-48 backdrop-opacity-10 border border-[#D8D8D81F] bg-white/10
           flex flex-col justify-center rounded-lg px-10 mt-[-10px] ml-[-2rem]"
          >
            <h1 className="text-white text-lg">Legendary Box #999</h1>
            <div className="flex flex-row mt-6">
              <Image src={bidLogo} width={20} height={20} />
              <p className="ml-2">
                Starting bid
                <br />
                <span className="font-bold text-white">9.7Eth</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
