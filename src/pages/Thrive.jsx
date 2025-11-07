import React from "react";

export default function Thrive() {
  return (
    <section
      id="thrive"
      className="min-h-screen flex flex-col justify-center px-8 md:px-28 bg-gradient-to-t from-neutral-900 to-black"
    >
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">
        How I Thrive
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mb-4">
        I perform at my best in dynamic, fast-paced environments where leadership
        and adaptability meet. Whether it’s guiding teams through transformation
        or tackling new commercial challenges — I bring calm focus and clear
        direction.
      </p>

      <p className="text-gray-400 max-w-3xl italic">
        “The goal isn’t just to meet standards — it’s to redefine them through
        teamwork, integrity, and energy.”
      </p>
    </section>
  );
}
