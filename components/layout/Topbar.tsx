"use client";

import { navLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Topbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathName=usePathname();
  return (
    <div className=" sticky top-0 left-0 w-full flex justify-between items-center py-4 p-8 bg-blue-200 shadow-xl lg:hidden">
      <h2 className="md:text-3xl text-2xl text-gray-800 font-bold ">
        Black house
      </h2>
      {/* {desktop} */}
      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className={`flex gap-4 text-md font-bold items-center hover:text-black duration-150 ${
              pathName == link.url ? "text-blue-500" : "text-gray-700 "
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 text-xl text-gray-500 font-bold items-center relative">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {/* mobile dropdown */}
        {dropdownMenu && (
          <div className="bg-white p-4 shadow-sm rounded-lg absolute top-8 right-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="flex text-gray-500 p-2  gap-4 text-sm font-bold items-center hover:bg-white duration-150  hover:text-black "
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}

        <UserButton />
      </div>
    </div>
  );
};

export default Topbar;
