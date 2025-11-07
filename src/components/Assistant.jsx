import React, { useState } from "react";

const SAMPLE_ANSWERS = {
  strengths:
    "Meroj’s strengths include coaching teams, driving compliance, and delivering consistent sales growth.",
  goals:
    "His short-term goal is to run an academy store; long-term he aims for an area/regional leadership role.",
  why:
    "His core motivation is to provide the best life for his family and to grow in leadership.",
};

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I’m Meroj’s AI assistant. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input.trim() };
    let reply = "I can tell you about his strengths, goals, and leadership style.";
    const lower = input.toLowerCase();
    if (lower.includes("strength")) reply = SAMPLE_ANSWERS.strengths;
    if (lower.includes("goal")) reply = SAMPLE_ANSWERS.goals;
    if (lower.includes("why")) reply = SAMPLE_ANSWERS.why;

    setMessages((prev) => [...prev, userMsg, { from: "bot", text: reply }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition z-50"
      >
        {open ? "Close assistant" : "AI Assistant"}
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-black/95 border border-yellow-400/40 rounded-xl p-4 flex flex-col gap-3 z-50">
          <h3 className="text-yellow-400 font-bold text-lg">
            Meroj AI Assistant
          </h3>
          <div className="h-48 overflow-y-auto flex flex-col gap-2 text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded ${
                  m.from === "bot"
                    ? "bg-gray-800 text-white self-start"
                    : "bg-yellow-400 text-black self-end"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-grow bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm focus:outline-none"
              placeholder="Ask about his leadership..."
            />
            <button
              onClick={handleSend}
              className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
