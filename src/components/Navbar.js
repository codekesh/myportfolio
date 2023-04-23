import React from "react";
import { NavLink } from "react-router-dom"
import { Button } from '@mui/material';

function Navbar() {
    const logo = require('./images/profile.jpeg')
    const resume = "https://drive.google.com/file/d/1oKqnoJGazFDpjQqY29_CWxLvTh1Mjd9D/view?usp=sharing"
    return (
        <div className="navbar">
            <NavLink to="/">
                <img src={logo} alt="my-profile" />
            </NavLink>
            <div className="nav-title">
                <NavLink className="nav-link" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='projects' >Projects</NavLink>
                <NavLink className="nav-link" to='work'>Work</NavLink>
                <Button href={resume} class="resume">
                    Resume
                </Button>
            </div>
        </div>
    )
}

export default Navbar