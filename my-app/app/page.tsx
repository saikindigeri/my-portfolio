"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";


import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import React from "react";
const words = ` Passionate about crafting dynamic and innovative web experiences. Constantly exploring new technologies and development approaches.
`;

const NewPage = () => {
  return(
   
<div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-200 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
         <br /> Hey, I am Sai Kumar, <Cover className="">Full Stack DEV.</Cover>
             </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      <TextGenerateEffect duration={2} filter={false} words={words} />
        </p>
    

      </div>
      <BackgroundBeams />
    </div>
  )
 
};

export default NewPage