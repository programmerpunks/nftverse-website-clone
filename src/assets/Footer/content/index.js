import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

export const Logo = "/assets/images/main-logo.png";
export const footerLinks = [
  {
    _id:0,
    text: "About",
    link: "#about",
  },
  {
    _id:1,
    text: "Blog",
    link: "#blog",
  },
  {
    _id:2,
    text: "NFT",
    link: "#nft",
  },
  {
    _id:3,
    text: "FAQ's",
    link: "#faq",
  },
  {
    _id:4,
    text: "Contact",
    link: "#contact",
  },
];

export const socialLinks = [
  <BsFacebook size={30} color="#EE7C08" />,
  <BsInstagram size={30} color="#EE7C08" />,
  <AiOutlineTwitter size={30} color="#EE7C08" />,
  <RiDiscordFill size={30} color="#EE7C08" />,
];

export const copyrightText = "Copyright 2022 nftverse | Powered by nftverse";

export const links = [
  { text: "Privacy Policy", link: "" },
  { text: "Terms & Condition", link: "" },
];
