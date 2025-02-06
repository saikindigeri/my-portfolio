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
  className="relative p-6 rounded-xl bg-gradient-to-r from-green-50 via-yellow-50 to-pink-50 border-0 hover:border-2 hover:border-blue-500 hover:bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group"
  aria-label={skill.name}
>
  {/* Subtle gradient background initially with hover color transition */}
  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-indigo-300 group-hover:via-indigo-400 group-hover:to-indigo-500 opacity-80 transition-all duration-300 ease-in-out"></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center justify-center text-gray-800 group-hover:text-white transition-colors duration-300 ease-in-out">
    <div className="text-5xl">{skill.icon}</div>
    <h3 className="mt-4 text-2xl font-semibold">{skill.name}</h3>
  </div>
</div>

  
    ))}
  </div>
    </section>
  );
}
