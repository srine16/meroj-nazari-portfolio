import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/strengths", label: "Strengths" },
    { to: "/core-competencies", label: "Core Competencies" },
    { to: "/known-for", label: "Known For" },
    { to: "/peak-performance", label: "Peak Performance" },
    { to: "/fix-flex", label: "Fix & Flex" },
    { to: "/thrive", label: "Thrive" },
    { to: "/career", label: "Career" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
    { to: "/quote", label: "Quote" },
  ];

  const desktopClass = ({ isActive }) =>
    `transition-colors hover:text-yellow-400 ${
      isActive ? "text-yellow-400" : ""
    }`;

  const mobileClass = ({ isActive }) =>
    `transition-colors hover:text-yellow-400 ${
      isActive ? "text-yellow-400" : ""
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-neutral-800 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* left brand */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-yellow-400 leading-tight">
            Meroj Nazari
          </span>
          <span className="text-[0.7rem] text-neutral-400">
            Store Manager · M&amp;S
          </span>
        </div>

        {/* center nav */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex gap-7 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={desktopClass}>
                  {link.label}
                </NavLink>
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
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={mobileClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
