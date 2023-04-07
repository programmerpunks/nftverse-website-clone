import Image from "next/image";
import { tag, heading, team } from "@/assets/Team/content";
import TeamCard from "./card";

export default function Team() {
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col justify-center items-center">
        <p className="font-Montserrat uppercase text-center secondary-text tracking-widest">
          {tag}
        </p>
        <h1
          className="w-72 bg-gradient-to-r from-[#F69F21] to-[#EE7C08]
                text-transparent bg-clip-text text-4xl py-3 text-center"
        >
          {heading}
        </h1>
      </div>

      <div className="flex flex-row  flex-nowrap overflow-x-scroll justify-center items-center p-5">
        {team.map((item) => (
          <TeamCard
            image={item.image}
            name={item.name}
            designation={item.designation}
          />
        ))}
        
      </div>
    </section>
  );
}
