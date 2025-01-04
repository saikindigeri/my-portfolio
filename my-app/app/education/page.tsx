"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2017",
    title: "SSC - Telangana Model School",
    description: "Graduated with 8.8 GPA.",
  },
  {
    year: "2019",
    title: "Intermediate - Telangana Model School & Junior College",
    description: "Completed with 91% in MPC.",
  },
  {
    year: "2022",
    title: "BSc MPCS - City College, Hyderabad",
    description: "Graduated with a 7.87 GPA.",
  },
  {
    year: "2023",
    title: "NxtWave Course",
    description: "Completed Full-Stack Development course.",
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white text-center">
      <h2 className="text-3xl font-extrabold mb-14 tracking-wide font-poppins">
        Education 
      </h2>
      <div className="max-w-4xl mx-auto relative">
  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-red-700 h-full"></div>

  {timelineData.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
      }}
      viewport={{ once: true }}
      className={`relative ${
        index % 2 === 0 ? "text-left pl-10" : "text-right pr-10"
      } mb-14`}
    >
      <div
        className={`absolute top-1 left-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-red-500 border-4 border-gray-900 rounded-full -translate-x-1/2`}
      ></div>

      {/* Timeline Card */}
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 20px rgba(159, 43, 104,3)", // Reduced blueish red shadow
          backgroundColor: "rgb(159, 43, 104,0.3)", // Balanced blueish red background
        }}
        transition={{ duration: 0.3 }}
        className={`inline-block w-[45%] p-6 bg-white/10 rounded-lg shadow-xl border border-gray-400  ${
          index % 2 === 0 ? "ml-auto" : ""
        }`}
      >
        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
        <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
        <span className="text-sm font-light block mt-3 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
          {item.year}
        </span>
      </motion.div>
    </motion.div>
  ))}
</div>


    </section>
  );
}
