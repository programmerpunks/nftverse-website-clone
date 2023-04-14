import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

export const Logo = "/assets/images/main-logo.png";
export const footerLinks = [
  {
    _id: 0,
    text: "Articles",
    link: "#articles",
  },
  {
    _id: 1,
    text: "Benefits",
    link: "#benefit",
  },
  {
    _id: 2,
    text: "Journey",
    link: "#journey",
  },
  {
    _id: 3,
    text: "FAQ's",
    link: "#faq",
  },
  {
    _id: 4,
    text: "Contact",
    link: "#newsletter",
  },
];

export const socialLinks = [
  {
    _id: 0,
    icon: <BsFacebook size={30} color="#EE7C08" />,
    link: "https://www.facebook.com",
  },
  {
    _id: 1,
    icon: <BsInstagram size={30} color="#EE7C08" />,
    link: "https://www.instagram.com",
  },
  {
    _id: 2,
    icon: <AiOutlineTwitter size={30} color="#EE7C08" />,
    link: "https://www.twitter.com",
  },
  {
    _id: 3,
    icon: <RiDiscordFill size={30} color="#EE7C08" />,
    link: "https://www.discord.com",
  },
];

export const copyrightText = "Copyright 2022 nftverse | Powered by nftverse";

export const links = [
  { _id: 0, text: "Privacy Policy", link: "" },
  { _id: 1, text: "Terms & Condition", link: "" },
];
