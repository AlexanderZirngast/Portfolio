"use client";

import { GithubProject } from "@/model/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [projects, setProjects] = useState<GithubProject[]>();

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjects(data);
      });
  }, []);

  const filteredProjects = projects?.filter((p) => {
    return p.name != "AlexanderZirngast" && p.name != "Portfolio"
  })


  return (
    <div className="flex  flex-col gap-4 items-center justify-center mb-16 " id="projects">
      <h1 className="text-3xl text-purple-500 font-bold">Projects</h1>
      <div className="grid p-4 flex-wrap grid-cols-1 sm: md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects?.map((proj) => {
          return (
            <Link href="" className="w-86 flex flex-col gap-4 text-white border-2 backdrop-blur-md border-gray-300/10 rounded p-4" key={proj.id}>
              <h3 className="text-xl" >{proj.name}</h3>
              <span className="text-gray-300">{proj.description}</span>
              <div className="flex gap-2">
                 {proj?.languages.map((language) => {
                return <Badge id={language.concat(proj.name)} className="text-purple-500/90 bg-purple-950/30">{ language}</Badge>
              })}
              </div>
             
            </Link>
          );
        })}
      </div>
    </div>
  );
}
