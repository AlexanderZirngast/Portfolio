"use client"
import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  return (
    <div className="max-w-6xl px-4 py-6 mx-auto relative flex justify-center" >
      <div className="flex flex-col gap-4 text-center  w-[50%]" suppressHydrationWarning>
         <h1 className="text-white text-3xl  font-semibold mb-4">Get in Touch!</h1>
          
          <input type="email" placeholder="email" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></input>
          <input type="text" placeholder="subject" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></input>
          <textarea  placeholder="subject" className=" border-2 border-gray-400/90  p-2 rounded-sm focus:border-none text-white  focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>

          <button className="bg-purple-500 rounded-xl text-md text-white ">Send Message</button>
      </div>
     
    </div>
  );
}
