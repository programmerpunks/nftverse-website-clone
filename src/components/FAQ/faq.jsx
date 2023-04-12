import Aos from "aos";
import { useEffect } from "react";

import Dropdown from "./dropdowns";
import {
  description,
  faqs,
  heading,
  tag,
  buttonText,
} from "@/assets/FAQ/content";

export default function FAQ() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);
  return (
    <section className="mb-64 lg:mb-5" id="faq">
      <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-[35rem]">
        <div className="flex bg-[url('/assets/images/dots-r.png')] bg-cover w-full h-full "></div>

        <div
          className="flex flex-col absolute lg:flex-row justify-between items-center px-40 mt-20 w-full 2xl:px-[25rem] 4xl:px-[35rem]"
          data-aos="fade-up"
        >
          <div className="flex flex-col justify-center items-center w-[20rem] lg:items-start md:w-[30rem]">
            <p className="text-sm md:text-md secondary-text tracking-widest text-center lg:text-left">
              {tag}
            </p>
            <h1
              className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-3xl md:text-5xl py-3 pb-5 text-center lg:text-left"
            >
              {heading}
            </h1>
            <p className="text-sm md:text-lg secondary-text tracking-widest text-center lg:text-left">
              {description}
            </p>
            <button
              className="w-52 font-Montserrat border border-neutral-500 hover:border-[#E38D11]
                p-3 px-8 rounded-full text-white mt-8 text-center"
            >
              {buttonText}
            </button>
          </div>

          <div className="flex flex-col mt-16 lg:mt-0">
            {faqs.map((item, key) => (
              <Dropdown item={item} key={item._id} delay={(key + 1) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
