import Link from "next/link";
import Image from "next/image";

import {
  copyrightText,
  footerLinks,
  links,
  Logo,
  socialLinks,
} from "@/assets/Footer/content";

export default function Footer() {
  return (
    <section>
      <div className="bg-[url('/assets/images/bg-wire.png')] bg-cover w-full h-[15rem] md:h-[10rem]">
        <div className="flex flex-col md:flex-row justify-between items-center p-3 px-44 pt-16">
          <Image src={Logo} width={200} height={200} alt="main-logo" />
          <div className="w-[17rem] my-7 md:w-[32rem] flex flex-row justify-between items-center self-center md:my-0 ">
            {footerLinks.map((item) => (
              <Link href={item.link}>
                <p className="text-[#7A7B7E] font-Montserrat text-sm hover:text-[#C7C9CD] md:text-xl">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-row justify-between items-center w-[12rem] cursor-pointer">
            {socialLinks[0]}
            {socialLinks[1]}
            {socialLinks[2]}
            {socialLinks[3]}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-44 mt-12 border-t border-[#2D2E30] pt-4">
          <p className="text-[#7A7B7E] font-Montserrat text-xs md:text-md">
            {copyrightText}
          </p>
          <div className="flex flex-row ">
            {links.map((item) => (
              <Link href={item.link} className="m-2">
                <p className="text-[#7A7B7E] font-Montserrat text-xs md:text-md hover:text-[#C7C9CD]">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}