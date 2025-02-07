"use client";

import { Button } from "@/components/ui/moving-border";
import React, { useState } from "react";
import { useTheme } from "next-themes"; // Import theme toggle hook

const ContactForm = () => {
  const { theme } = useTheme(); // Get current theme (light/dark)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(result.error || "Something went wrong!");
      }
    } catch (err) {
      console.log(err)
      setStatus("Failed to send message!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 text-center transition-all duration-300 ${
        theme === "dark"
          ? " bg-black  text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 transition-all duration-300"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 focus:bg-gray-700"
              : "bg-white text-black border-gray-300 focus:bg-gray-200"
          }`}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 focus:bg-gray-700"
              : "bg-white text-black border-gray-300 focus:bg-gray-200"
          }`}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 focus:bg-gray-700"
              : "bg-white text-black border-gray-300 focus:bg-gray-200"
          }`}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 focus:bg-gray-700"
              : "bg-white text-black border-gray-300 focus:bg-gray-200"
          }`}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-900 text-white border-neutral-700 hover:bg-gray-700"
              : "bg-gray-200 text-black border-gray-400 hover:bg-gray-300"
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
};

export default ContactForm;
