import React from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <div>welcome</div>
    </React.StrictMode>,
  );
}
