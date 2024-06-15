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
        <Route path="/work" element={<Home scrollTo="work" />} />
        <Route path="/projects" element={<Home scrollTo="projects" />} />
        <Route path="/skills" element={<Home scrollTo="skills" />} />
        <Route path="/about" element={<Home scrollTo="about" />} />
        <Route path="/connect" element={<Home scrollTo="connect" />} />
        <Route path="/work" element={<Home scrollTo="work" />} />
      </Routes>
    </>
  );
}

export default App;
