import React, { useState, useEffect } from "react";

export default function AccessibilityBar() {
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}rem`;
  }, [fontScale]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  const handleRead = () => {
    const sel = window.getSelection()?.toString();
    const text =
      sel && sel.trim().length > 0
        ? sel
        : document.querySelector("section[id]")?.innerText || "";
    if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
      <button
        onClick={() => setFontScale((p) => Math.min(p + 0.1, 1.6))}
        className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
      >
        A+
      </button>
      <button
        onClick={() => setFontScale((p) => Math.max(p - 0.1, 0.8))}
        className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
      >
        A-
      </button>
      <button
        onClick={() => setHighContrast((p) => !p)}
        className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
      >
        Contrast
      </button>
      <button
        onClick={handleRead}
        className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
      >
        Read
      </button>
    </div>
  );
}
