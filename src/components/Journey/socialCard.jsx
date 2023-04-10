import Aos from "aos";
import { useEffect } from "react";

export default function SocialCard({ item, delay }) {
  const { _id, icon, stats, caption, customStyle } = item;

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 200 });
  }, []);

  const cardStyle =
    "p-3 rounded-lg backdrop-opacity-10 bg-[#9A9FA2]/20 border border-[#65686A] flex flex-col justify-center items-center " +
    customStyle;

  return (
    <div
      key={_id}
      className={cardStyle}
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      {icon}
      <h1 className="text-2xl text-white mt-3">{stats}</h1>
      <p className="text-lg secondary-text">{caption}</p>
    </div>
  );
}
