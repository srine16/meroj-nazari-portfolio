import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="snap-start relative min-h-screen flex flex-col justify-center items-start bg-gradient-to-b from-black to-[#0a0a0a] px-8 md:px-28 pt-28 pb-24 text-left overflow-visible"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
        Professional Experience
      </h2>

      <div className="space-y-6 text-gray-300 max-w-3xl leading-relaxed">
        <p>
          <strong className="text-yellow-300">
            Store Manager · Marks &amp; Spencer
          </strong>
          <br />
          A proven leader with deep operational expertise in multi-site retail
          management. Meroj is known for transforming underperforming locations
          into top-ranked stores through strategic coaching and consistent
          compliance.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Built and maintained high-performing teams that consistently exceed
            KPIs.
          </li>
          <li>
            Championed customer experience and staff engagement to raise NPS
            scores.
          </li>
          <li>
            Delivered strong financial results through precise margin control,
            stock accuracy, and cost discipline.
          </li>
        </ul>

        <p>
          His approach blends commercial thinking with people-first management —
          ensuring business goals are met without compromising culture.
        </p>
      </div>

      {/* Ambient glow for subtle depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
