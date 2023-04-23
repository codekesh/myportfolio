import React from "react";
import Connect from "./Connect"
import Footer from "./Footer"
import Skills from "./Techskill"

function Home() {
    return (
        <div className="home">
            <div className="heading">
                <h1 className="hello">Hello!</h1>
                <h1>I am Keshav, </h1>
                <h2>a MERN web developer.</h2>
                <span>"I find that constantly trying out new things keeps me up to date."</span>
            </div>
            <div className="skills"><Skills/></div>
            <Connect />
            <Footer />
        </div>
    )
}

export default Home