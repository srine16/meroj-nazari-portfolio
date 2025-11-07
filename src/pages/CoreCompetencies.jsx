import React from "react";
import { motion } from "framer-motion";

export default function CoreCompetencies() {
  const competencies = [
    "Driving Results & Sales Performance",
    "Retail Operations & Stock Management",
    "Colleague Development & Coaching",
    "Customer Experience & Service Standards",
    "Compliance, H&S and Legal Trading",
    "Shrink / Stock Loss Prevention",
    "Team Motivation & Engagement",
    "Change Delivery in Fast-Paced Stores",
  ];

  return (
    <section
      id="core-competencies"
      className="snap-start min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center pt-28 pb-20 px-6 overflow-hidden"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-yellow-400 mb-6 text-center drop-shadow-[0_0_15px_rgba(250,204,21,0.25)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Core Competencies
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-neutral-300 max-w-3xl text-center mb-14 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        A decade of UK retail experience across M&amp;S, Lidl, Co-op and Tesco —
        building stores that trade safely, legally and commercially while
        developing the next generation of leaders.
      </motion.p>

      {/* Competency grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {competencies.map((item, index) => (
          <motion.div
            key={item}
            className="bg-gradient-to-br from-[#141414] to-[#0b0b0b] border border-yellow-400/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(250,204,21,0.06)] hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-500 hover:-translate-y-1"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-neutral-100 font-medium text-lg text-center">
              {item}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
