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
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10 font-poppins">Projects</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 flex flex-col justify-between"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}