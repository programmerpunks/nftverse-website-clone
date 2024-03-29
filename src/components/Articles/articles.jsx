import Aos from "aos";
import { useEffect } from "react";

import Card from "./card";
import { articles, heading, tag } from "@/assets/Articles/content";
import Header from "../Header/header";

export default function Articles() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  return (
    <section
      className="overflow-x-hidden overflow-y-hidden mt-14"
      id="articles"
    >
      <div data-aos="fade-up">
        <Header tag={tag} heading={heading} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center px-32 md:px-[10rem] lg:px-32 2xl:px-80 4xl:px-[30rem]">
        {articles.map((item, key) => (
          <Card item={item} key={item._id} delay={100 * (key + 1)} />
        ))}
      </div>

      <div></div>
    </section>
  );
}
