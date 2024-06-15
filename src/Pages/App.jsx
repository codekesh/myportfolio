import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home scrollTo="projects" />} />
        <Route path="/work" element={<Home scrollTo="work" />} />
      </Routes>
    </>
  );
}

export default App;
