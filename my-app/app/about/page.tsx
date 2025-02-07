'use client'

import React from 'react';
import { useTheme } from "next-themes";

const About = () => {
  const { theme } = useTheme(); // Get current theme

  return (
    <section className={`py-20 text-center transition-all duration-300 
      ${theme === "dark" ? "bg-black text-gray-200" : "bg-white text-gray-900"}`}>

      <p className="mt-2 text-lg max-w-3xl mx-auto">
         I'm a passionate full-stack developer with expertise in building responsive and scalable web applications using modern technologies like React, Next.js, Node.js, and Blockchain.
      </p>
    </section>
  );
};

export default About;
