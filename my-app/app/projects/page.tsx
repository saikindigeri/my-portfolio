'use client'
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    src:"/public/projects_images/chat.png",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    src:"/public/projects_images/ecommerce.png",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    src:"/public/projects_images/yt.png",
  },
  
];

export default function ProjectsSection() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

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
      className="py-20 bg-gradient-to-b from-[#1e293b] to-black text-white text-center overflow-hidden"
    >
       <h2 className="text-5xl font-extrabold mb-14 tracking-wide font-poppins">
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
        scale: 1.08,
        background:
          "linear-gradient(135deg, #D6AEDD, #A5F3FC, #FFDDD2)", // Soft lavender, mint green, and light peach gradient
        boxShadow: "0 8px 25px rgba(228, 134, 204, 0.7)", // Subtle lavender shadow
        transition: { duration: 0.5 },
      }}
      className="flex-none w-[380px] md:w-[450px] p-8 bg-white/10 rounded-2xl shadow-xl border border-white/20 hover:shadow-3xl"
    >
      <h3 className="text-3xl font-semibold mb-5">{project.title}</h3>
      <p className="text-lg opacity-80 leading-relaxed">{project.description}</p>
      
    </motion.div>
  ))}
</motion.div>


      </div>
    </section>
  );
}