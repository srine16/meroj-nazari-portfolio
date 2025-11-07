import React from "react";
import { motion } from "framer-motion";

export default function FixAndFlex() {
  const fixItems = [
    "To be based within a reasonable distance from home.",
    "Opportunity to lead and have direct reports.",
    "A role that values people development and standards.",
  ];

  const flexItems = [
    "Open to taking on additional responsibilities.",
    "Open to shadowing academy store managers.",
    "Open to relief/holiday cover for RM/academy stores.",
  ];

  return (
    <section
      id="fixflex"
      className="relative snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#0a0a0a] px-6 md:px-20 pt-28 pb-24 text-center overflow-visible"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-14"
      >
        My Fix &amp; Flex
      </motion.h2>

      {/* Two-Column Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full relative z-10">
        {/* FIX SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 text-left hover:border-yellow-400/40 transition duration-300 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">My FIX</h3>
          <ul className="space-y-3 text-gray-200 text-lg">
            {fixItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl leading-none mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* FLEX SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 text-left hover:border-yellow-400/40 transition duration-300 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">My FLEX</h3>
          <ul className="space-y-3 text-gray-200 text-lg">
            {flexItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl leading-none mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
