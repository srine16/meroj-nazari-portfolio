import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ Keep the background fix, but NEVER on scroll
const fixViewport = () => {
  const root = document.documentElement;
  root.style.setProperty("background-color", "#000");
  document.body.style.backgroundColor = "#000";
  document.body.style.margin = "0";
};

window.addEventListener("load", fixViewport);
window.addEventListener("resize", fixViewport);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
