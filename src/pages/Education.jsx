import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-[auto] h-auto bg-[#050505] pt-28 pb-20 px-6 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-black/40 border border-yellow-400/10 rounded-2xl p-6 md:p-8 shadow-[0_0_25px_rgba(250,204,21,0.05)]"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          University of Plymouth
        </h3>
        <p className="text-neutral-300 mt-1">
          Bachelor of Science (BSc), Economics · 2011 – 2013
        </p>
        <p className="mt-4 text-neutral-400 text-base leading-relaxed">
          Built strong analytical and commercial thinking skills that support
          day-to-day store performance, KPI interpretation, and planning.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-10 text-left"
      >
        <h4 className="text-sm uppercase tracking-wide text-neutral-400 mb-3">
          Professional Development
        </h4>
        <ul className="space-y-2 text-neutral-200 text-sm md:text-base leading-relaxed">
          <li>• People leadership & colleague development</li>
          <li>• Health, safety & legal trading standards</li>
          <li>• Store transformation and change delivery</li>
        </ul>
      </motion.div>
    </section>
  );
}
