import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b  from-gray-900 to-black text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col p-20 justify-between items-center">
      
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/saikindigeri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-gray-700 hover:scale-110 transition-all"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saikumarkindigeri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-gray-700 hover:scale-110 transition-all"
          >
            <FaLinkedin className="w-6 h-6 text-white" />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sai_.kindigeri/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-gray-700 hover:scale-110 transition-all"
          >
            <FaInstagram className="w-6 h-6 text-white" />
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/Devaa_Sai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r  from-blue-600 to-gray-700 hover:scale-110 transition-all"
          >
            <FaTwitter className="w-6 h-6 text-white" />
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
