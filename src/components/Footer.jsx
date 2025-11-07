import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-6 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Meroj Nazari</span>. 
        All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Designed and Developed by <span className="text-yellow-500">Sunjida</span>.
      </p>
    </footer>
  );
}
