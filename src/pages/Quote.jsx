import React from "react";

export default function Quote() {
  return (
    <section
      id="quote"
      className="snap-start h-screen flex flex-col justify-center items-center text-center px-8 bg-gradient-to-b from-black to-[#111]"
    >
      <p className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-6 max-w-3xl leading-snug">
        “If you enjoy what you do, you will never work a day in your life.”
      </p>
      <p className="text-gray-400 text-sm uppercase tracking-[0.3em]">
        — Meroj’s guiding principle
      </p>
    </section>
  );
}
