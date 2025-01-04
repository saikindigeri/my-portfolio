"use client";
import { Button } from "@/components/ui/moving-border";
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
      <Button
        borderRadius="1.75rem"
        className="bg-gray-900 text-white dark:bg-slate-900  border-neutral-700 dark:border-slate-800"
      >
Submit
      </Button>
    </div>
      </form>
    </section>
  );
}
