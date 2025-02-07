"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTheme } from "next-themes"; // Import theme toggle hook

const Footer = () => {
  const { theme } = useTheme(); // Get current theme (light/dark)

  return (
    <footer
      className={`py-8 transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col p-20 justify-between items-center">
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/saikindigeri"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <FaGithub className="w-6 h-6" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saikumarkindigeri/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sai_.kindigeri/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/Devaa_Sai"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm opacity-80 mt-4">
          &copy; {new Date().getFullYear()} Sai Kumar Kindigeri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
