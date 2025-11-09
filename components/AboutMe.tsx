import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function AboutMe() {
  return (
    <div id="about-section" className="max-w-6xl px-4 py-6 mx-auto relative flex flex-col gap-4  justify-center  ">
      <h1 className=" text-3xl font-semibold flex space-x-2 justify-center">
        <span className="text-white">About</span>
        <span className="text-purple-500/90"> Me</span>
      </h1>

      <div className="flex justify-between">
        <div className="flex flex-1 flex-col justify-center gap-4 text-white">
          <h1 className="text-xl font-semibold text-purple-500">Coding, Creating, Learning</h1>
          <div>I specialize in creating responsive, accessible, and performant web applications using modern technologies.</div>
          <div>I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.</div>
          <Link className="bg-white text-black rounded-full p-2 w-fit hover:bg-gray-200 link-grow text-glow"  href={''}> Get in Touch</Link>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Image src={'./code-typing-animate.svg'} alt="https://storyset.com/work" width={400} height={300} ></Image>
        </div>
      </div>
    </div>
  );
}
