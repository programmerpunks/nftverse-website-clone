import { articles, heading, tag } from "@/assets/Articles/content";
import Header from "../Header/header";
import Card from "./card";

export default function Articles() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden mt-10">
      <Header tag={tag} heading={heading} />
      <div className="flex flex-col md:flex-row justify-center items-center px-32">
        {articles.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>

      <div></div>
    </section>
  );
}
