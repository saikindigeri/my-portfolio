"use client";
import React from "react";
import "@fontsource/poppins"; // Import Poppins font
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiBlockchaindotcom, SiTailwindcss, SiTypescript, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Blockchain", icon: <SiBlockchaindotcom size={40} /> },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 transition-transform flex flex-col items-center"
          >
            {skill.icon}
            <h3 className="text-2xl font-semibold font-poppins mt-4">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
