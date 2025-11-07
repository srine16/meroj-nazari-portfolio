import React from "react";
import { motion } from "framer-motion";

export default function Strengths() {
  const strengths = [
    "Proven ability to motivate, coach, and develop staff at all levels — creating high-performing teams.",
    "Empowers and trusts team members while holding them accountable, driving operational excellence.",
    "Strong commitment to compliance, health & safety, and company standards.",
    "Customer-obsessed mindset, ensuring a seamless and consistent experience in every interaction.",
    "Experienced in leading change, adapting quickly to new business priorities, and delivering measurable growth.",
  ];

  return (
    <section
      id="strengths"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a0a0a] to-black px-6 md:px-20 pt-28 pb-24 text-center overflow-visible"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-14"
      >
        Strengths &amp; Leadership
      </motion.h2>

      {/* Strengths Grid */}
      <div className="grid gap-6 md:gap-8 max-w-4xl w-full relative z-10">
        {strengths.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-900/60 border border-neutral-800 rounded-2xl px-6 py-5 text-left hover:border-yellow-400/40 transition duration-300 shadow-[0_0_25px_rgba(250,204,21,0.05)]"
          >
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {point}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
