import React from 'react';
import { BackgroundLines } from './ui/background-lines';


const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      {/* Background Lines */}
      <BackgroundLines />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-white">
          Hi, I'm <span className="text-yellow-300">Sai Kumar</span>
        </h1>
        <p className="mt-4 text-lg text-white max-w-xl mx-auto">
          Full Stack Developer | React | Next.js | Blockchain Enthusiast
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
