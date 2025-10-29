import ContactSection from "@/components/ui/Contact";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { Particles } from "@/components/ui/shadcn-io/particles";
export default function Home() {
  return (
    <div className="bg-[hsl(222,47%,4%)] w-screen h-screen">
    <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />
      
        <Navbar />
      
    </div>
  );
}
