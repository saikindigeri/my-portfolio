import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-gradient-to-b from-gray-900  to-black text-white text-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Footer Header */}
        <h2 className="text-4xl font-bold mb-10 font-poppins">Stay Connected</h2>

        {/* Social Media Section */}
        <div className="space-y-6 mb-12">
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/saikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-blue-500 transform transition-all duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/saikumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-gray-400 transform transition-all duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:saikumar@gmail.com"
              className="text-white text-3xl hover:text-red-500 transform transition-all duration-300 ease-in-out hover:scale-125"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

      
    
        {/* Copyright Section */}
        <div className="text-sm text-gray-400 mt-12">
          <p>&copy; 2025 Sai Kumar Kindigeri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
