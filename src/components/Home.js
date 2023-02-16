import React from "react";
import Connect from "./Connect"
import Footer from "./Footer"
import Skills from "./tech_skills"

function Home() {
    return (
        <div className="home">
            <div className="heading">
                <h1 className="hello">Hello!</h1>
                <h1>I am Keshav, </h1>
                <h2>a full-stack web developer.</h2>
                <span>My favourite word is Hope.</span>
            </div>
            <div className="skills"><Skills/></div>
            <Connect />
            <Footer />
        </div>
    )
}

export default Home