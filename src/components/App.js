import React from "react";
import Navbar from "./Navbar"
import Home from "./Home"
import Projects from "./Projects"
import Work from "./Work"
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Navbar />
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/work" element={<Work />}></Route>
            </Routes>
        </>
    )
}

export default App;