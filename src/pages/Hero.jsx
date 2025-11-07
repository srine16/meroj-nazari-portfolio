import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  // helper so we’re 100% sure it scrolls
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-[#060606] to-[#0b0b0b] pt-24 overflow-hidden"
    >
      {/* TOP GLOW – now non-clickable */}
      <motion.div
        className="pointer-events-none absolute -top-40 md:-top-56 w-[38rem] h-[38rem] bg-yellow-400/20 blur-3xl rounded-full"
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* NAME */}
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 tracking-tight drop-shadow-[0_0_25px_rgba(250,204,21,0.4)]"
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Meroj Nazari
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        className="mt-4 text-base md:text-lg text-neutral-200 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Store Manager · Marks &amp; Spencer
        <br />
        Driving high-performing retail teams, compliance, and customer-first
        excellence.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="mt-10 flex gap-5 flex-wrap justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        {/* goes to #strengths (this id exists in App.jsx) */}
        <button
          onClick={() => scrollTo("strengths")}
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:scale-[1.05] hover:shadow-[0_0_35px_rgba(250,204,21,0.55)] transition-all duration-300"
        >
          View Strengths
        </button>

        {/* your Experience section is wrapped with id="career" in App.jsx */}
        <button
          onClick={() => scrollTo("career")}
          className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] transition-all duration-300"
        >
          Career Goals
        </button>

        {/* contact section id="contact" */}
        <button
          onClick={() => scrollTo("contact")}
          className="text-sm text-neutral-400 hover:text-yellow-300 tracking-wide transition-colors duration-200"
        >
          Contact Meroj →
        </button>
      </motion.div>

      {/* BOTTOM SOFT GLOW (also non-clickable) */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full" />
    </section>
  );
}
