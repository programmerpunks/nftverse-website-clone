import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Card({ item, delay }) {
  const { title, description, status, color } = item;

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);
  return (
    <div
      key={title}
      className="flex flex-col justify-center items-center backdrop-opacity-10 bg-neutral-400/20 
      border border-[#373737] w-auto h-72 rounded-lg p-10 m-5 mt-14"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h1 className="text-white text-center mt-10 text-2xl">{title}</h1>
      <p className="text-center w-[22rem] secondary-text mt-3">{description}</p>
      <p className={`p-2 text-white border border-[${color}]`}>{status}</p>
    </div>
  );
}
