"use client";

import { Particles } from "@/components/ui/shadcn-io/particles";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-dosis bg-black text-white">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
      <img
        src={"/earth.svg"}
        alt="Earth"
        className="absolute top-[20%] left-[15%] w-20 md:w-28 animate-spin-earth z-10 pointer-events-none"
      />

      <img
        src={"/moon.svg"}
        alt="Moon"
        className="absolute top-[12%] left-[25%] w-8 md:w-10 z-10 pointer-events-none"
      />

      <img
        src={"/rocket.svg"}
        alt="Rocket"
        className="absolute top-[63%] left-[0%] w-16 md:w-20 animate-rocket-move pointer-events-none z-20"
      />

      <div className="absolute top-[60%] right-[20%] z-30 animate-move-astronaut pointer-events-none">
        <img
          src={"/astronaut.svg"}
          alt="Astronaut"
          className="w-16 md:w-24 animate-rotate-astronaut"
        />
      </div>

      <div className="relative z-50 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-7xl md:text-9xl font-bold">404</h1>
        <p className="mt-6 text-xl md:text-2xl tracking-widest uppercase">
          Looks like you are
        </p>
        <p className="text-3xl md:text-4xl font-medium mt-2 uppercase">
          Lost in space
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2 bg-black border border-white rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
