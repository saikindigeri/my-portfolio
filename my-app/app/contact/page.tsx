"use client";
import React from "react";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10 font-poppins">Contact Me</h2>
      <form className="max-w-3xl mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
          />
        </div>
        <div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-32 p-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
