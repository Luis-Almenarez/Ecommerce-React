import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Components/Navbar";
import "./index.css";
import { Hero } from "./Components/Hero";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Navbar />
      <Hero />
    </>
  </React.StrictMode>
);
