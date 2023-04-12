import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  buttonText,
  heading,
  sliderData,
  tag,
} from "@/assets/Collection/content";
import { settings } from "@/helper/Collection";
import SliderCard from "./sliderCard";

export default function Collection() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);
  return (
    <section
      className="flex flex-col mt-[50rem] w-full overflow-x-hidden overflow-y-hidden md:mt-[60rem] xl:px-40 lg:mt-52"
      data-aos="fade-up"
      id="collection"
    >
      <p className="font-Montserrat uppercase text-center secondary-text tracking-widest">
        {tag}
      </p>
      <h1 className="text-[#EE7C08] text-center text-4xl mt-5">{heading}</h1>
      <Slider {...settings} className=" px-5 mt-10 2xl:mx-52 4xl:mx-64">
        {sliderData.map((item, key) => (
          <SliderCard item={item} key={key} />
        ))}
      </Slider>

      <button
        className="font-Montserrat border border-[#B4B7B9] hover:border-[#E38D11]
        p-3 rounded-full text-white mt-20 text-center w-64 self-center"
      >
        {buttonText}
      </button>
    </section>
  );
}
