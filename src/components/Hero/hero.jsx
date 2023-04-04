import Image from "next/image";

import {
  bidLogo,
  greenBlurBg,
  heroImage,
  layerImage,
  orangeBlurBg,
  heading,
  caption,
  joinButton,
  getStartedButton,
  blurBoxText,
  blurBoxHeading,
  bidText,
} from "@/assets/Hero/content/hero";
import { ShowCounter } from "./timer";
import { useCountdown } from "@/customHook/useCountDown";

export default function Hero() {
  const THREE_DAYS_IN_MS = 2 * 24 * 60 * 60 * 100;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

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
          className="absolute blur-2xl top-60 ml-[-20rem] xl:ml-[8rem]"
        />
      </div>

      <div className="hero-content flex-col xl:flex-row xl:mt-[-5rem]">
        <div className="flex flex-col items-center xl:items-start animate__animated animate__fadeInLeft xl:mr-14">
          <h1 className="text-3xl w-[20rem] text-center text-white leading-snug xl:w-[30rem] xl:text-left md:text-4xl xl:text-6xl  ">
            {heading}
          </h1>
          <p className="py-3 w-[18rem] text-[15px] text-center text-[#7E7E7E] font-Montserrat whitespace-normal md:py-7 md:w-[30rem] md:text-[20px] xl:text-left xl:w-[32rem]">
            {caption}
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4 justify-center">
            <button
              className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08] p-3 px-10 mb-4 text-white font-bold font-Sora
            rounded-full border border-[#E38D11] md:mr-6 md:mb-0"
            >
              {getStartedButton}
            </button>
            <button
              className="self-end ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-300 p-3 px-10  text-white 
                    font-bold font-Sora rounded-full border border-white hover:shadow-md hover:shadow-[#E38D11]/50 hover:border-[#E38D11]"
            >
              {joinButton}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-7 xl:mt-0 animate__animated animate__fadeInRight">
          <Image
            src={heroImage}
            width={350}
            height={500}
            className="w-[18rem] md:w-[20rem] xl:w-[24rem] rounded-lg shadow-2xl"
          />
          <Image
            src={layerImage}
            width={300}
            height={300}
            className="absolute z30 w-[10rem] ml-[-17rem] mt-[-13rem] md:w-[17rem] md:ml-[-20rem] md:mt-[-15rem] xl:w-[20rem] xl:ml-[-24rem]"
          />

          <div
            className="w-[20rem] mt-[-2rem] h-54 pt-[3.4rem] md:h-48 ml-0 md:ml-[-1rem] md:w-[29rem] xl:w-[28rem] xl:pt-8 backdrop-opacity-10 border 
            border-[#D8D8D81F] bg-white/10 flex flex-col justify-center rounded-lg px-10 pb-4"
          >
            <h1 className="text-white text-lg">{blurBoxHeading}</h1>
            <div className="flex flex-col md:flex-row mt-6 justify-between">
              <div className="flex flex-row">
                <Image src={bidLogo} width={20} height={20} />
                <p className="ml-2 font-Montserrat">
                  {blurBoxText}
                  <br />
                  <span className="text-white font-Sora-SemiBold">{bidText}</span>
                </p>
              </div>

              <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
