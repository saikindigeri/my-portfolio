"use client";

import React from "react";

import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/moving-border";



const NewPage = () => {
  return(

    <section id="about">
  <div className="bg-black pt-20  " >
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-violet-900 via-gray-500 to-yellow-200 dark:from-neutral-800 dark:via-white dark:to-white">
            Hey, I am <br /> Sai Kumar <Cover>Full Stack Dev</Cover>
          </h1>
<div className="flex justify-center">
  
<Button  
             borderRadius="1.75rem"
             className=" text-center font-semibold bg-gray-900 text-white dark:bg-slate-900  border-neutral-700 dark:border-slate-800"
           >
<a download="sai.resume" href="/devasai.pdf">Resume</a>
           </Button>
</div>
        </div>
    </section>

  
      
      );
    }
    
  
 


export default NewPage


