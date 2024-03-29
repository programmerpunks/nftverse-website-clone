import Aos from "aos";
import { tag, heading, team } from "@/assets/Team/content";
import TeamCard from "./card";
import Header from "../Header/header";

export default function Team() {
  return (
    <section
      className="overflow-x-hidden overflow-y-hidden mt-10"
      data-aos="fade-up"
      id="team"
    >
      <Header tag={tag} heading={heading} />

      <div className="flex flex-row flex-nowrap overflow-x-scroll justify-center items-center p-5 px-[27rem] md:px-5">
        {team.map((item) => (
          <TeamCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
