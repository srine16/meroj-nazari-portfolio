import React from "react";
import { motion } from "framer-motion";

export default function KnownFor() {
  const highlights = [
    "Inspiring high-performing teams through strong coaching and clear development.",
    "Leading by example with consistency, accountability, and excellence on the shop floor.",
    "Creating stores that trade safely, legally, and profitably — every day.",
    "Bringing people, process, and customer focus together for lasting success.",
  ];

  return (
    <section
      id="knownfor"
      className="relative snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#0a0a0a] px-6 md:px-20 pt-28 pb-24 text-center overflow-visible"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10"
      >
        Known For
      </motion.h2>

      {/* Lead Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl text-lg mb-10 leading-relaxed"
      >
        Meroj’s leadership reputation is built on clarity, empowerment, and
        delivery. He’s known for transforming everyday retail operations into
        exceptional, customer-first experiences.
      </motion.p>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full relative z-10">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-left hover:border-yellow-400/40 transition duration-300"
          >
            <p className="text-lg text-gray-200 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>

      {/* Accent glow — fixed positioning */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
