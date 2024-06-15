import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../assets/images/favicon-16x16.png";

function Navbar() {
  const resume =
    "https://drive.google.com/file/d/1F6VbCxG_aLgt4CQ41s6QWQ-MO30yodKM/view?usp=sharing";

  return (
    <div className="navbar">
      <div className="nav-title">
        <Link className="nav-link logo" to="/">
          <img src={logo} alt="profile" />
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/work">
          Work
        </Link>
        <Button href={resume} class="resume">
          Resume
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
