"use client";
import React from "react";
import "@fontsource/poppins"; // Import Poppins font
import { motion } from "framer-motion";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs.",
    link: "https://spotify.com",
  },
  {
    title: "Tesla",
    description:
      "A company that specializes in electric vehicles, energy storage, and clean energy solutions.",
    link: "https://tesla.com",
  },
];


export function ProjectsSection() {
  return (
    <section
  id="projects"
  className="py-20 bg-gradient-to-b from-gray-900 to-black text-white text-center overflow-hidden"
>
  <h2 className="text-4xl font-bold mb-10 font-poppins">Projects</h2>

  <div className="relative w-full overflow-x-hidden">
    <motion.div
      className="flex space-x-8"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      }}
    >
      {projects.concat(projects).map((project, index) => (
        <div
          key={index}
          className="min-w-[300px] md:min-w-[400px] p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 flex flex-col justify-between"
        >
          <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
          <p className="text-lg">{project.description}</p>
        </div>
      ))}
    </motion.div>
  </div>
</section>

  
  );
}