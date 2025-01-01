"use client";
import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 left-0 right-0" />
      <div className="pt-20 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Explore my projects, skills, and more.
        </p>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/10 shadow-lg border-b border-white/20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <div><h3 className="text-white">Sai Deva</h3></div>
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive(null)}
              className={`text-lg font-semibold text-white ${
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
