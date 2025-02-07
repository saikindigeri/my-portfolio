"use client";

import React, { useState, useEffect } from "react";
import "@fontsource/poppins";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is applied properly after hydration
  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme("dark"); // Set default theme to dark
    }
  }, [theme, setTheme]);

  if (!mounted) return null; // Prevents hydration mismatch issues

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg transition-all duration-300 ${
        resolvedTheme === "dark"
          ? "bg-black/80 text-white"
          : "bg-white/80 text-black"
      } shadow-lg border-b border-white/20 font-poppins ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <a
          href="#about"
          className={`text-xl font-bold transition-colors duration-300 ${
            resolvedTheme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Sai Kumar
        </a>

        {/* Theme Toggle Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              {/* Sun Icon (Visible in Dark Mode) */}
              <Sun
                className={`h-[1.2rem] w-[1.2rem] transition-all ${
                  resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                }`}
              />
              {/* Moon Icon (Visible in Light Mode) */}
              <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                  resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setActive(item.name)}
              onMouseLeave={() => setActive(null)}
              className={`text-lg transition-all ${
                resolvedTheme === "dark"
                  ? active === item.name
                    ? "text-blue-400"
                    : "text-white hover:text-gray-400"
                  : active === item.name
                  ? "text-blue-500"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
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

      {/* Mobile Navbar Links */}
      <div
        className={`md:hidden absolute top-0 left-0 right-0 p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "transform translate-y-0 bg-black/90 text-white"
            : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl hover:text-blue-400 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
