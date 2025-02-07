"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Import theme toggle hook

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
  const { theme } = useTheme(); // Get current theme (light/dark)

  return (
    <section
      id="education"
      className={`py-24 text-center transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-extrabold mb-14 tracking-wide font-poppins">
        Education
      </h2>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-all duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-b from-blue-500 to-red-700"
              : "bg-gradient-to-b from-gray-300 to-gray-600"
          }`}
        ></div>

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
            {/* Timeline Marker */}
            <div
              className={`absolute top-1 left-1/2 w-6 h-6 border-4 rounded-full -translate-x-1/2 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-400 to-red-500 border-gray-900"
                  : "bg-gradient-to-br from-gray-300 to-gray-500 border-gray-600"
              }`}
            ></div>

            {/* Timeline Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
              className={`inline-block w-[45%] p-6 rounded-lg shadow-xl border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/10 border-gray-400 text-white"
                  : "bg-gray-100 border-gray-300 text-black"
              } ${index % 2 === 0 ? "ml-auto" : ""}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>
              <span
                className={`text-sm font-light block mt-3 bg-clip-text text-transparent transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-400 to-red-500"
                    : "bg-gradient-to-r from-gray-400 to-gray-600"
                }`}
              >
                {item.year}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
