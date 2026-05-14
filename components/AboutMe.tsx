"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollFadeIn from "./ScrollFadeIn";

export default function AboutMe() {

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      targetId: string
    ) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  return (
    <div
      id="about-section"
      className="max-w-6xl min-h-full px-4 py-6 mx-auto relative flex flex-col gap-4  justify-center scroll-mt-20 "
    >
      <ScrollFadeIn>
        <h1 className=" text-3xl font-semibold flex space-x-2 mb-8 justify-center">
          <span className="text-white">About</span>
          <span className="text-purple-500/90"> Me</span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-1 flex-col justify-center gap-4 text-white">
            <h1 className="text-xl font-semibold text-purple-500 mt-4">
              Coding, Creating, Learning
            </h1>
            <div>
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies.
            </div>
            <div>
              I’m a student in the fourth class at the HTBLA Kaindorf with a strong
              interest in technology and hands-on work. In my free time, I enjoy
              doing sports and working on technical projects to improve my
              skills and learn new things.
            </div>

            <div></div>
            <Link
              className="bg-white flex text-black rounded-full p-2 w-fit hover:bg-gray-200 link-grow text-glow"
              href={"#contact-section"}
              onClick={(e) => handleClick(e, "contact-section")}
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <Image
              src={"./code-typing-animate.svg"}
              alt="https://storyset.com/work"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
