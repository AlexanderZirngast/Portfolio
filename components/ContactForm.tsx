"use client"
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ScrollFadeIn from "./ScrollFadeIn";

export default function ContactForm() {
  return (
    <ScrollFadeIn>
    <div className="max-w-6xl px-4 py-6 mx-auto relative flex justify-center" >
      <div className="flex flex-col gap-4 text-center  w-[50%]" suppressHydrationWarning>
         <h1 className="text-white text-3xl  font-semibold mb-4">Get in Touch!</h1>
          
          <input type="text" placeholder="Your name" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></input>
          <input type="email" placeholder="Your email" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></input>
          <textarea  placeholder="Your message" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>

          <button className="bg-purple-500 p-1 rounded-xl text-md text-white box-shadow-custom-purple ">Send Message</button>
      </div>
     
    </div>
    </ScrollFadeIn>
  );
}
