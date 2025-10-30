import ContactSection from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Particles } from "@/components/ui/shadcn-io/particles";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="bg-[hsl(222,47%,4%)] w-screen h-screen overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      <Navbar />
      <Hero/>
    </div>
  );
}
