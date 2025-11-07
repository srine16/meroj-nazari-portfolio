import React from "react";
import { motion } from "framer-motion";

export default function PeakPerformance() {
  return (
    <section
      id="peak-performance"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-28 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a] text-gray-200 overflow-hidden"
    >
      {/* Subtle background gradient motion */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-yellow-400/5 via-transparent to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,0,0.15)]"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Peak Performance
      </motion.h2>

      <motion.div
        className="max-w-3xl space-y-5 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          I perform at my best when I’m driving operational excellence —
          leading high-performing teams, setting ambitious standards, and
          delivering measurable business outcomes.
        </p>

        <p>
          I thrive in environments that demand adaptability, precision, and
          teamwork — where leadership, customer satisfaction, and business
          growth align seamlessly.
        </p>

        <motion.p
          className="italic text-gray-400 border-l-4 border-yellow-400 pl-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          "At my peak, I combine strategic focus with hands-on leadership —
          turning challenges into consistent success stories."
        </motion.p>
      </motion.div>
    </section>
  );
}
