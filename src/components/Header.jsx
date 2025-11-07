import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "strengths", label: "Strengths" },
    { id: "core-competencies", label: "Core Competencies" },
    { id: "knownfor", label: "Known For" },
    { id: "peak-performance", label: "Peak Performance" },
    { id: "fixflex", label: "Fix & Flex" },
    { id: "why", label: "Thrive" },
    { id: "career", label: "Career" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
    { id: "quote", label: "Quote" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* left brand */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-yellow-400 leading-tight">
            Meroj Nazari
          </span>
          <span className="text-[0.7rem] text-neutral-400">
            Store Manager · M&S
          </span>
        </div>

        {/* center nav */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex gap-7 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* mobile burger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="lg:hidden text-yellow-400 text-2xl"
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-neutral-800">
          <ul className="flex flex-col items-center gap-3 py-4 text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
