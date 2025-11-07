import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 py-6 text-center">
      {/* COPYRIGHT LINE */}
      <p className="text-sm text-neutral-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">Meroj Nazari</span>. All rights reserved.
      </p>

      {/* DESIGN CREDIT LINE */}
      <p className="text-xs text-neutral-500 mt-1">
        Designed and developed by{" "}
        <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition">
          Sunjida Rine
        </span>
        .
      </p>
    </footer>
  );
}
