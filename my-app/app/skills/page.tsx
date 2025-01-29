"use client";
import React from "react";
import "@fontsource/poppins"; // Import Poppins font
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "CSS & Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10 font-poppins">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="relative p-8 rounded-lg shadow-xl bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-gradient-to-br from-black to-purple-900 hover:scale-110 transition-all duration-300 group"
      >
        <div className="absolute inset-0 z-0 rounded-lg bg-gradient-to-b from-transparent via-white/30 to-transparent group-hover:via-white/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          {skill.icon}
          <h3 className="text-3xl font-semibold font-poppins mt-5">
            {skill.name}
          </h3>
        </div>
      </div>
    ))}
  </div>
    </section>
  );
}
