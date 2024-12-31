"use client";
import { BackgroundLines } from "@/components/ui/background-lines";

import { Cover } from "@/components/ui/cover";

import React from "react";

const NewPage = () => {
  return (
    <BackgroundLines className="relative overflow-hidden bg-gradient-to-r bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 font-[Arial] px-4 md:px-8">
     
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
  <br /> Hey, I am Sai Kumar <Cover>Full Stack DEV</Cover>
      </h1>



          <p className="text-xl md:text-xl max-w-4xl mx-auto opacity-90 leading-relaxed mb-8">
            Crafting dynamic web experiences with{" "}
            <span className="text-blue-400 font">React</span>,{" "}
            <span className="text-green-400 font">Node.js</span>,{" "}
            <span className="text-yellow-400 font">Express</span>, and{" "}
            <span className="text-red-400 font">MongoDB</span>.{" "}
            Exploring blockchain development.
          </p>
          <div className="mt-12">
            <button className="px-10 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-xl font-medium tracking-wide transition-all transform hover:scale-105 shadow-2xl hover:shadow-xl ease-in-out duration-300">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default NewPage;


