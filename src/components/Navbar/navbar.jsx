import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { logo } from "@/assets/Navbar/content/navbar";

import blurGreenBg from '../../assets/Navbar/images/l-blur-green.png'

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const linkStyle =
    "py-6 px-5 text-white text-center text-[17px] text-lg hover:text-[#e5941f] font-Sora-Bold";

  return (
    <div className="flex ">
      <Image
        src={blurGreenBg}
        width={500}
        height={500}
        className="absolute translate-x-[-40%] translate-y-[-40%]"
      />
      <div className="p-10 md:px-44 z-20 w-full">
        <nav className="bottom-0 md:mb-0">
          <div className="justify-between md:flex">
            <div className="flex justify-between">
              <div className="flex items-center justify-center px-6 cursor-pointer">
                <Link href="/">
                  <Image src={logo} width={200} height={200} alt="main-logo" />
                </Link>
              </div>

              <div className="lg:hidden p-6">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/assets/images/Navbar/close.png"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/assets/images/Navbar/menu-icon.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 flex-row justify-between opacity-75 md:block ${
                navbar ? " block w-full mt-2" : "hidden"
              }`}
            >
              <ul className="md:h-auto items-center justify-center md:flex">
                <li className={`${linkStyle} nav-link active:bg-blue-600`}>
                  <Link href="#banner">
                    <p>Home</p>
                  </Link>
                </li>
                <li className={`${linkStyle} `}>
                  <Link href="#opensource">
                    <p>NFT</p>
                  </Link>
                </li>
                <li className={`${linkStyle} `}>
                  <Link href="#dao">
                    <p>DAO</p>
                  </Link>
                </li>
                <li className={`${linkStyle}`}>
                  <Link href="#tutorials">
                    <p>Tutorials</p>
                  </Link>
                </li>
                <li className={`${linkStyle} md:ml-[7rem] md:mr-[-10rem]`}>
                  <button
                    className="self-end ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-300 p-2 px-10 text-white 
                    font-bold rounded-full border border-white hover:shadow-md hover:shadow-[#E38D11]/50 hover:border-[#E38D11]"
                  >
                    Connect
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
