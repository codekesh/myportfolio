import React from "react";
import Connect from "./Connect"
import Footer from "./Footer"
import Skills from "./Techskill"

function Home() {
    const profile = require('./images/profile.jpeg')
    return (
        <div className="home">
            <div className="header">
                <img src={profile} alt="profile" />
                <div className="describe">
                    <p className="hello">Hello! I am Keshav,</p>
                    <p className="p1">a MERN web developer.</p>
                    <p className="p2">"I find that constantly trying out new things keeps me up to date."</p>
                </div>
            </div>
            <div className="skills"><Skills /></div>
            <Connect />
            <Footer />
        </div>
    )
}

export default Home