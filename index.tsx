import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// Delay SW registration until after the page is fully loaded
window.addEventListener("load", () => {
  const updateSW = registerSW({
    onNeedRefresh() {
      if (confirm("New content available. Reload?")) {
        updateSW(true);
      }
    },
  });
});

// Render App without StrictMode for production performance
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);