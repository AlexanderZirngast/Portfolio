import React from "react";
import GradientText from "./GradientText";

export default function ContactSection() {
  return (
    <div className="text-white">
      <GradientText
        colors={["#ffffff", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className=" text-2xl"
      >
        Add a splash of color!
      </GradientText>
      
      


    </div>
  );
}
