import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const achievements = [
    "Built and maintained high-performing teams that consistently exceed KPIs.",
    "Championed customer experience and staff engagement to raise NPS scores.",
    "Delivered strong financial results through precise margin control, stock accuracy, and cost discipline.",
    "Ensured operational excellence and brand compliance across all departments.",
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-[#0a0a0a] px-6 md:px-20 pt-28 pb-24 text-center overflow-visible"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-14"
      >
        Professional Experience
      </motion.h2>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 max-w-5xl text-left hover:border-yellow-400/40 transition duration-300 shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          Store Manager · Marks &amp; Spencer
        </h3>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          A proven leader with deep operational expertise in multi-site retail
          management. Meroj is known for transforming underperforming locations
          into top-ranked stores through strategic coaching and consistent
          compliance.
        </p>

        <ul className="space-y-3 text-gray-200 text-lg leading-relaxed">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-yellow-400 text-xl leading-none mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-300 text-lg mt-6 leading-relaxed">
          His approach blends commercial thinking with people-first management —
          ensuring business goals are met without compromising culture.
        </p>
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
