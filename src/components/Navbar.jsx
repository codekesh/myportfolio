import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../assets/images/favicon-16x16.png";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  color: rgba(59, 148, 174, 1);
  padding: 5px 70px;
  border-width: 2px;
`;

function Navbar() {
  const resume =
    "https://drive.google.com/file/d/1iQeyMnsYRhw0290h3M5CSRbB5MZlH_PH/view";

  const handleOpenResume = () => {
    window.open(resume);
  };

  return (
    <div className="navbar">
      <div className="nav-title">
        <Link className="logo" to="/">
          <img src={logo} alt="profile" />
        </Link>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/work">
          Work
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/skills">
          Skills
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/connect">
          Connect
        </Link>
        <StyledButton variant="outlined" onClick={handleOpenResume}>
          Resume
        </StyledButton>
      </div>
    </div>
  );
}

export default Navbar;
