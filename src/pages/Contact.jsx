import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] overflow-hidden text-center px-6 py-24"
    >
      {/* Soft neon halo background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-500/10 blur-[160px] rounded-full"
        animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]"
      >
        Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-neutral-300 max-w-2xl mb-10 text-lg leading-relaxed"
      >
        Interested in Meroj’s experience, leadership style, or retail
        performance success? Reach out directly for collaboration or discussion.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap gap-5 justify-center"
      >
        {/* Email */}
        <a
          href="mailto:Meroj.Nazari@marks-and-spencer.com"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(250,204,21,0.55)] transition-all duration-300"
        >
          📧 Email Meroj
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/meroj-nazari-75a268193"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] transition-all duration-300"
        >
          🔗 View LinkedIn
        </a>
      </motion.div>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 text-neutral-500 text-sm"
      >
        📍 Based in London, UK
      </motion.p>
    </section>
  );
}
