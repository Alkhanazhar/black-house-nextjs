"use client";

import { navLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <main className="sticky left-0 top-0 flex flex-col gap-8 py-8 bg-blue-50 shadow-xl max-lg:hidden h-screen">
      <h2 className="text-3xl font-bold px-10">Black house</h2>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.url}
          className={`flex text-gray-600 gap-4 text-xl font-bold items-center hover:bg-white duration-150 px-10 py-4 ${
            pathName == link.url ? "text-blue-500" : "text-gray-700 "
          }`}
        >
          {link.icon}
          <p>{link.label}</p>
        </Link>
      ))}
      <div className="flex gap-4 text-xl text-gray-500 font-bold items-center px-10 py-4">
        <UserButton />
        <p>Edit profile</p>
      </div>
    </main>
  );
};

export default LeftSideBar;
