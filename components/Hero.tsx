"use client";
import React from "react";
import GradientText from "./GradientText";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-6xl px-4 py-6 mx-auto relative w-full h-full">
      <div className=" mt-18 sm:mt-22 lg:mt-24 flex justify-between">
        <div className="flex flex-col space-y-4">
          <h1 className="text-white text-2xl sm:text-3xl  font-medium text-shadow-[rgba(255,255,255,0.2)] text-shadow-sm">
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

          <div className="mt-4 flex  items-center space-x-4">
            <Link
              href={"#projects-section"}
              className="border border-white rounded-full p-2 bg-white"
            >
              View My Projects
            </Link>
            <Link
              href={"#contact-section"}
              className="border border-white rounded-full p-2 text-white"
            >
              Contact Me
            </Link>
          </div>

          <ul className="text-white">
            <li>test</li>
            <li>mets</li>
          </ul>
        </div>
        <div className="w-1/2 h-72 border rounded-2xl border-gray-400/90 backdrop-blur-lg">
          test
        </div>
      </div>
    </div>
  );
}
