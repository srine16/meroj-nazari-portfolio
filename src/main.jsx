import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 🧩 Chrome / Edge Rendering Fix
const fixViewport = () => {
  // Force repaint of root background to eliminate 1px seam
  const root = document.documentElement;
  root.style.setProperty("background-color", "#000");
  window.scrollTo(0, 0); // reset any subpixel scroll
  document.body.style.backgroundColor = "#000";
  document.body.style.margin = "0";
};

// Run fix on load + resize + zoom change
window.addEventListener("load", fixViewport);
window.addEventListener("resize", fixViewport);
window.addEventListener("scroll", fixViewport);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
