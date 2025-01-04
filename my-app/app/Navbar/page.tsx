"use client";
import React, { useState } from "react";
import "@fontsource/poppins"; // Import Poppins font

const navItems = [
  
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  {name:"Edcuation",href:"#education"},
  { name: "Projects", href: "#projects" },
 
  { name: "Contact", href: "#contact" },
];

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center font-poppins">
      <Navbar className="top-0 left-0 right-0" />
    
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={ ` fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/10 shadow-lg border-b border-white/20 font-poppins ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold text-white dark:text-white">
          Sai Kumar
        </a>
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive(null)}
              className={`text-lg ${
                active === item.name
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-white dark:text-white"
              } hover:text-gray-500 dark:hover:text-blue-400 transition-all`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
