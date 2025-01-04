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
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full"></div>

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
              className={`absolute top-1 left-1/2 w-5 h-5 bg-red-500 border-4 border-white rounded-full -translate-x-1/2`}
            ></div>

            {/* Timeline Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(255, 99, 99, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              className={`inline-block w-[45%] p-6 bg-white/10 rounded-lg shadow-lg border border-white/20 ${
                index % 2 === 0 ? "ml-auto" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.description}</p>
              <span className="text-sm font-light block mt-3 text-red-400">
                {item.year}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
