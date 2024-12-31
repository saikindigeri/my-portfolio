"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";

const NewPage = () => {
  return (
    <BackgroundLines className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-extrabold animate-pulse mb-6">
            Hi, I'm Sai Kumar 👋
          </h1>
          <p className="text-2xl mb-4 tracking-wide">
            A Full Stack Developer
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-75 leading-relaxed">
            Passionate about building scalable and dynamic web applications using 
            <span className="text-blue-400"> React</span>, 
            <span className="text-green-400"> Node.js</span>, 
            <span className="text-yellow-400"> Express</span>, and 
            <span className="text-red-400"> MongoDB</span>.  
            Blockchain enthusiast exploring the future of decentralized apps.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition-all shadow-lg">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default NewPage;
