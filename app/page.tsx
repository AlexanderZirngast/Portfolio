import Navbar from "@/components/Navbar";
import { Particles } from "@/components/ui/shadcn-io/particles";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="bg-[hsl(222,47%,4%)] w-screen h-screen overflow-x-hidden scrollbar-custom">
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
      <AboutMe/>
      <Projects/>
      <ContactForm />
      <Footer/>
    </div>
  );
}
