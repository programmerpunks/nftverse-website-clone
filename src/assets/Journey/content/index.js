import image from "/src/assets/Journey/images/woman-wearing-virtual-reality-glasses.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

export const bgImage = image;
export const tag = "The story begin";
export const heading = "Join us on the journey! ";
export const description =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export const info = [
  {
    question: "What is the utility?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    question: "When did we launch?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

export const socialAnalytics = [
  {
    _id: 0,
    icon: <AiOutlineTwitter size={40} color="#EE7C08" />,
    stats: "20K",
    caption: "Followers",
    customStyle: `w-[9rem] h-[7rem] m-5 mt-8 ml-[-5rem] lg:w-[11rem] lg:h-[10rem] lg:ml-[-10rem]`,
  },
  {
    _id: 1,
    icon: <RiDiscordFill size={40} color="#EE7C08" />,
    stats: "10K",
    caption: "Followers",
    customStyle: `w-[9rem] h-[7rem]  m-4 ml-[-8rem]  mt-1 lg:w-[12rem] lg:h-[11rem] lg:ml-[-4rem]`,
  },
  {
    _id: 2,
    icon: <BsInstagram size={40} color="#EE7C08" />,
    stats: "30K",
    caption: "Followers",
    customStyle: `absolute w-[6rem] h-[8rem] mt-0 ml-32 lg:w-[11rem] lg:h-[12rem] lg:ml-[13rem]`,
  },
];
