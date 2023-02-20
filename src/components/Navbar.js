import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
    const logo = require('./images/profile.jpeg')
    const resume="https://drive.google.com/file/d/1wfBVmDB314AGzFQjhgxOO7xvUKJXAmPL/view"
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={logo} alt="my-profile" />
            </NavLink>
            <div className="nav-title">
                <NavLink className="nav-link" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='projects' >Projects</NavLink>
                <NavLink className="nav-link" to='work'>Work</NavLink>
                <button className="resume">
                <a  href={resume} target="_blank" rel="noreferrer">Resume</a>

                </button>
            </div>
        </div>
    )
}

export default Navbar