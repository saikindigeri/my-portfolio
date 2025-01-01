import React from 'react';

const Projects = () => {
  return (
    <section className="py-20 bg-black bg-gray-100 text-center" id="projects">
      <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Example Project Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/project1.png" alt="Project 1" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold">Real Estate Web App</h3>
            <p className="mt-2 text-gray-600">
              A fully responsive real estate web application built with Next.js and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;