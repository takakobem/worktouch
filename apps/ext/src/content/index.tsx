import "webextension-polyfill";
import React from "react";
import { createRoot } from "react-dom/client";
import { Content } from "./content";
import css from "../global.css?inline";

const contentRoot = document.createElement("div");
contentRoot.id = "worktouch";
contentRoot.style.display = "contents";
document.body.append(contentRoot);
const shadowRoot = contentRoot.attachShadow({ mode: "open" });
const shadowWrapper = document.createElement("div");
shadowWrapper.id = "root";
shadowWrapper.style.display = "contents";
shadowRoot.appendChild(shadowWrapper);
createRoot(shadowWrapper).render(
  <React.StrictMode>
    <style type="text/css">{css}</style>
    <Content />
  </React.StrictMode>
);
