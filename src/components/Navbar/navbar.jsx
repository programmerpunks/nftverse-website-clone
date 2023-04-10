import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  blurGreenBg,
  closeIcon,
  logo,
  menuIcon,
  navButton,
  navLinks,
} from "@/assets/Navbar/content/navbar";

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const linkStyle =
    "py-6 px-5 text-center text-[17px] text-lg hover:text-[#E5941F]";

  return (
    <div className="flex">
      <Image
        src={blurGreenBg}
        width={500}
        height={500}
        alt="background-layer"
        className="absolute translate-x-[-40%] translate-y-[-40%]"
      />
      <div className="p-10 px-4  z-20 w-full animate__animated animate__fadeInDown xl:px-44 2xl:px-[32rem] 4xl:px-[42rem]">
        <nav className="bottom-0 xl:mb-0 xl:flex flex-row">
          <div className="flex flex-row justify-between">
            <div className="flex items-center justify-center px-6 cursor-pointer">
              <Link href="/">
                <Image src={logo} width={200} height={200} alt="main-logo" />
              </Link>
            </div>

            <div className="xl:hidden p-6">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src={closeIcon}
                    width={30}
                    height={30}
                    alt="close-logo"
                  />
                ) : (
                  <Image
                    src={menuIcon}
                    width={30}
                    height={30}
                    alt="menu-logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-1 flex-row justify-between opacity-75 xl:block ${
              navbar ? " block w-full mt-2" : "hidden"
            }`}
          >
            <ul className="xl:h-auto items-center justify-center xl:flex">
              {navLinks.map((item) => (
                <li
                  key={item.text}
                  className={`${linkStyle}  ${
                    item.active ? "text-[#E5941F]" : "text-white"
                  }`}
                >
                  <Link href={item.link}>
                    <p>{item.text}</p>
                  </Link>
                </li>
              ))}

              <li className={`${linkStyle} xl:ml-[7rem] xl:mr-[-10rem]`}>
                <button
                  className="self-end ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-300 p-2 px-10 text-white 
                    font-bold rounded-full border border-white hover:shadow-md hover:shadow-[#E38D11]/50 hover:border-[#FC9E14]"
                >
                  {navButton}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
