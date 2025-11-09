"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-sm border-b bg-slate-950/10 border-slate-900/15 animate-float-in">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center px-4 text-lg h-14 sm:h-16 md:h-20">
          <Link
            className="flex space-x-1 items-center justify-center text-white font-semibold text-grow "
            href={"/"}
          >
            <span>Zirngast</span>
            <span className="text-purple-500/95">Portfolio</span>
          </Link>
          <div className="hidden md:flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 text-gray-300">
            <Link className="hover:text-white" href={"/"} >
              Home
            </Link>
            <Link className="hover:text-white" href={"#about-section"}>
              About
            </Link>
            <Link className="hover:text-white" href={"#projects-section"}>
              Projects
            </Link>
            <Link className="hover:text-white" href={"#contact-section"}>
              Contact
            </Link>
          </div>
          <button
            className="block md:hidden text-white hover:text-white"
            onClick={() => setIsMobileMenuOpened((prev) => !prev)}
          >
            {isMobileMenuOpened ? <X /> : <Menu />}
          </button>
        </div>
        {isMobileMenuOpened && (
          <div className="px-4 flex flex-col  items-center gap-4 text-gray-300 md:hidden">
            <Link onClick={() => setIsMobileMenuOpened(false)} className="hover:text-white" href={"/"}>
              Home
            </Link>
            <Link onClick={() => setIsMobileMenuOpened(false)} className="hover:text-white" href={"#about-section"}>
              About
            </Link>
            <Link onClick={() => setIsMobileMenuOpened(false)} className="hover:text-white" href={"#projects-section"}>
              Projects
            </Link>
            <Link onClick={() => setIsMobileMenuOpened(false)} className="hover:text-white" href={"#contact-section"}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
