import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const clickNavHandler = () => {
    setNavOpen((pre) => !pre);
  };

  return (
    <div className={`w-screen bg-zinc-200 drop-shadow-lg sticky h-[80px]`}>
      <div className="flex items-center h-full justify-between mx-auto px-4 max-w-[1200px]">
        <div className="text-4xl sm:text-3xl font-bold ">BRAND. </div>

        {!navOpen ? (
          <GiHamburgerMenu
            onClick={clickNavHandler}
            className="text-2xl hidden sm:block"
          />
        ) : (
          <CgClose
            onClick={clickNavHandler}
            className="text-2xl hidden sm:block font-bold text-red-700"
          />
        )}
        <div className={`flex sm:hidden gap-5`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Platforms</a>
          <a href="#">Pricing</a>
        </div>
        <div
          className={`"bg-zinc-200 ${
            navOpen ? "top-20 opacity-100" : "-top-96  opacity-0"
          }  transition-[3s_all_ease] right-0 px-5 pb-6 min_sm:hidden flex flex-col gap-8 z-[100] bg-zinc-200 absolute w-screen `}
        >
          <a onClick={clickNavHandler} href="#">
            Home
          </a>
          <a onClick={clickNavHandler} href="#">
            About
          </a>
          <a onClick={clickNavHandler} href="#">
            Support
          </a>
          <a onClick={clickNavHandler} href="#">
            Platforms
          </a>
          <a onClick={clickNavHandler} href="#">
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
