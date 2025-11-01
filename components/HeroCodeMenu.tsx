import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HeroCodeMenu() {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={nightOwl}
      customStyle={{
        height: "100%",
        margin: 0,
        padding: "2rem",
        background: "rgba(11, 19, 31, 0.3)",
        borderRadius: "30px",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        width: "fit-content",
      }}
    >
      {`const aboutMe = {
  name: "Alexander Zirngast",
  status: "Student",
  stack: {
    languages: ["Javascript", "Typescript", "SQL"],
    frameworks: ["React", "NextJS", "TailwindCSS"],
  },
  learning: ["Nextjs", "Typescript", "Web Design"],
};`}
    </SyntaxHighlighter>
  );
}
