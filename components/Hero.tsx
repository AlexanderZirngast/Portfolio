"use client";
import React from "react";
import GradientText from "./GradientText";
import Link from "next/link";
import HeroCodeMenu from "./HeroCodeMenu";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

export default function Hero() {

const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="max-w-6xl  px-4 py-6 mx-auto relative w-full h-full ">
      <ScrollFadeIn>
        <div className=" mt-16 sm:mt-22 lg:mt-24 flex flex-col gap-y-32 lg:flex-row  justify-between">
          <div className="flex flex-col justify-center lg:justify-baseline  space-y-4">
            <h1 className="text-white text-2xl sm:text-3xl font-medium text-shadow-[rgba(255,255,255,0.2)] text-shadow-sm">
              Hi there!<span className="wave">👋🏼</span>
            </h1>
            <GradientText
              colors={["#7F00FF", "#BF40BF", "#7F00FF"]}
              animationSpeed={10}
              showBorder={false}
              className="text-3xl sm:text-4xl font-medium rounded-none "
            >
              <span className="text-white">I'm</span> Alexander Zirngast
            </GradientText>

            <div className="flex flex-col space-y-4  justify-center sm:justify-start ">
              <h1 className="text-xl w-fit font-semibold bg-linear-to-r from-violet-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Creative Developer & Designer
              </h1>
              <div className="text-white/90">
                I build beautiful digital experiences that combine stunning
                design with powerful functionality. Specializing in modern web
                applications and interactive user interfaces.
              </div>
            </div>
            <div className="mt-4 flex space-x-4 justify-center sm:justify-start">
              <Link
                href={"#projects-section"}
                className="border border-white transition rounded-full p-2 bg-white link-grow"
                onClick={(e) => handleClick(e, "project-section")}
              >
                View My Projects
              </Link>
              <Link
                href={"#contact-section"}
                className="border border-white hover:bg-white hover:text-black rounded-full p-2 text-white link-grow"
                onClick={(e) => handleClick(e, "contact-section")}
              >
                Contact Me
              </Link>
            </div>

            <div className="flex justify-center sm:justify-start  space-x-2 sm:space-x-3 md:space-x-4 text-xl md:text-2xl text-white">
              <Link href={"https://github.com/AlexanderZirngast"}>
                <SiGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/alexander-zirngast-175a962b6/"}>
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="backdrop-blur-lg hidden sm:block relative md:flex justify-center">
            <HeroCodeMenu />
            <div className=" absolute -bottom-8 -right-4 flex  space-x-2 items-center justify-center w-fit p-3 rounded-full text-white bg-gray-400/5  border border-[rgba(255,255,255,0.2)] animate-float-up-down backdrop-blur-sm shadow--sm shadow-[rgba(0,0,0,0.2)]">
              <span className="text-[1.3rem]">💻</span>
              <span>Currently working on something awesome!</span>
            </div>
          </div>
        </div>
        
      </ScrollFadeIn>
      <div className="flex flex-col items-center justify-center absolute bottom-12 -translate-x-1/2 left-1/2 text-white animate-bounce">
          Scroll
          <ArrowDown className="text-purple-500" />
        </div>
    </div>
  );
}
