"use client";
import React, { useState } from "react";
import "@fontsource/poppins"; // Import Poppins font

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/10 shadow-lg border-b border-white/20 font-poppins ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold text-white dark:text-white">
          Sai Kumar
        </a>

        {/* Desktop version of navbar links */}
        <div className="hidden md:flex space-x-8">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile version of navbar links */}
      <div
        className={`md:hidden bg-black/90 absolute top-0 left-0 right-0 p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
              className="text-xl text-white hover:text-blue-500 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
