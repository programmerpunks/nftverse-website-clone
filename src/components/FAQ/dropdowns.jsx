import Aos from "aos";
import { useEffect } from "react";

export default function Dropdown({ item, delay }) {
  const { _id, question, answer } = item;

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <div
      key={_id}
      className="collapse collapse-arrow rounded-lg w-[20rem] md:w-[30rem] m-3"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <input type="checkbox" />
      <div className="collapse-title text-lg md:text-xl text-white font-Sora p-5 
      backdrop-opacity-10 bg-neutral-500/20 border border-neutral-700">
        {question}
      </div>
      <div className="collapse-content ">
        <p className="secondary-text p-5">{answer}</p>
      </div>
    </div>
  );
}
