"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Import theme toggle hook
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const projects = [
  {
    title: "Chat App",
    description:
      "A responsive messaging platform built with ReactJS, Node.js, Express, Socket.io, and MySQL for instant communication.",
    demoLink: "https://wsocket.vercel.app",
    githubLink: "https://github.com/saikindigeri/chat_app.git",
    src: "/projects_images/chat.png",
  },
  {
    title: "Ecommerce",
    description:
      "A secure and scalable e-commerce application built with ReactJS, Node.js, Express, and MongoDB, featuring user authentication and role-based authorization.",
    demoLink: "https://sainxtcart.ccbp.tech/",
    githubLink: "https://github.com/saikindigeri/NxtTrendz_Ecommerce.git",
    src: "/projects_images/ecommerce.png",
  },
  {
    title: "YouTube Clone",
    description:
      "A responsive YouTube-inspired web application built with ReactJS, Node.js, Express, and MongoDB, featuring video upload, user authentication, and content management.",
    demoLink: "https://saikwatch.ccbp.tech/",
    githubLink: "https://github.com/saikindigeri/nxtwatch.git",
    src: "/projects_images/utube.png",
  },
];

export default function ProjectsSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme(); // Get current theme (light/dark)

  useEffect(() => {
    if (!isHovering) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { width, left } = containerRef.current.getBoundingClientRect();
      const xPos = e.clientX - left;
      const scrollPercentage = (xPos / width) * 100;

      controls.stop();
      controls.start({
        x: `-${scrollPercentage}%`,
        transition: {
          duration: 1.5,
          ease: "easeOut",
        },
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section
      id="projects"
      className={`py-20 text-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : " bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-extrabold mb-14 tracking-wide font-poppins">
        Featured Projects
      </h2>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div className="flex space-x-12 w-max" animate={controls}>
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              className={`flex-none w-[320px] md:w-[380px] p-6 rounded-xl shadow-lg transition-all duration-300 border ${
                theme === "dark"
                  ? "bg-black  text-white "
                  : "bg-white  text-black "
              }`}
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 mb-3 text-center">
                {project.title}
              </h3>
              <p className="text-md opacity-80 leading-relaxed text-center">
                {project.description}
              </p>

              <div className="flex justify-between items-center px-6 py-3 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium hover:underline transition-all duration-300"
                >
                  <FiGithub
                    className={`text-2xl ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium hover:underline transition-all duration-300"
                >
                  <FaExternalLinkAlt
                    className={`text-xl ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
