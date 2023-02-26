import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    const year = new Date().getFullYear();
    const logo=require('./images/download.jpg')
    const resume="https://drive.google.com/file/d/1l8lbUKbLLoopu77yyqe-qAqiTew8QP-x/view"
    return (
        <div className="footer">
            <p className="copy">Copyright ⓒ <NavLink to="/" className="name">Keshav Tulsyan</NavLink> {year}</p>
            <a className="location" href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noreferrer">
                <img src={logo} alt="India" />
                <span className="place">India</span>
            </a>
        </div>
    )
}

export default Footer