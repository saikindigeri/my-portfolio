'use client'

import { Button } from "@/components/ui/moving-border";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      console.log(result)

      if (response.status === 200) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(result.error || "Something went wrong!");
      }
    } catch (error) {
      setStatus("Failed to send message!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <section id="contact"   className="py-20 bg-gradient-to-b from-black to-gray-900 text-white text-center">


      <h2 className="text-3xl text-white font-semibold text-center mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
   className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
               className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-black/20"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
        className="bg-gray-900 text-white dark:bg-slate-900  border-neutral-700 dark:border-slate-800"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
      {status && <p className="mt-4 text-center text-white">{status}</p>}

    </section>
   
  );
};

export default ContactForm;
