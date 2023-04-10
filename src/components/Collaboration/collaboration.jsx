import Aos from "aos";
import { useEffect } from "react";

import { companyLogos, heading } from "@/assets/Collaboration/content";
import Image from "next/image";

export default function Collaboration() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <section className="my-20">
      <div className="flex flex-col justify-center items-center"  data-aos="fade-up">
        <h1
          className="bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-3xl md:text-4xl py-3 text-center md:text-left"
        >
          {heading}
        </h1>

        <div className="flex flex-col md:flex-row">
          {companyLogos.map((item, key) => (
            <Image
              key={key}
              src={item}
              width={200}
              height={200}
              alt="company-logo"
              className="w-[13rem] h-auto m-6 opacity-50 cursor-pointer hover:opacity-90 2xl:w-[17rem]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
