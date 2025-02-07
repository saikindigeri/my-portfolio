"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import theme toggle hook

import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/moving-border";

const NewPage = () => {
  const { theme } = useTheme(); // Get current theme (light/dark)

  return (
    <section id="about">
      <div
        className={`pt-20 transition-all duration-300 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1
          className={`text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 
          bg-clip-text text-transparent bg-gradient-to-b ${
            theme === "dark"
              ? "from-neutral-800 via-white to-white"
              : "from-white via-blue-700 to-red-900"
          }`}
        >
          Hey, I am <br /> Sai Kumar <Cover>Full Stack Dev</Cover>
        </h1>

        <div className="flex justify-center">
          <Button
            borderRadius="1.75rem"
            className="text-center font-semibold bg-gray-900 text-white dark:bg-slate-900 border-neutral-700 dark:border-slate-800"
          >
            <a download="sai.resume" href="/devasai.pdf">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewPage;
