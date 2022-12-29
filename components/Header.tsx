"use client";

import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("remove", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          className="object-contain cursor-pointer"
          width={100}
          height={100}
          alt="Neflix"
        />
      </Link>
      <ul className="hidden space-x-4 md:flex">
        <li className="headerLink cursor-default font-semibold text-white hover:text-white">
          Home
        </li>
        <li className="headerLink">Films</li>
        <li className="headerLink">Series</li>
        <li className="headerLink">New & popular</li>
        <li className="headerLink">My Lists</li>
      </ul>
      <div className="flex items-center space-x-4 font-light text-sm">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href={"/"}>
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
