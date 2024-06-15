import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Connect() {
  return (
    <div className="connect">
      <Typography
        variant="h3"
        align="center"
        sx={{ margin: "50px", color: "rgb(2, 102, 124)" }}
      >
        Connect With Me
      </Typography>
      <div className="connection">
        <a href="https://github.com/codekesh">
          <GitHubIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
        <a href="https://www.linkedin.com/in/keshav-t-488684112/">
          <LinkedInIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
        <a href="mailto: 201117@iiitt.ac.in">
          <MailIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
        <a href="https://www.instagram.com/keshavtulsiyan/">
          <InstagramIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010782427183">
          <FacebookIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
        <a href="https://twitter.com/tulsyan_keshav">
          <XIcon fontSize="large" style={{ margin: "2% 6%" }} />
        </a>
      </div>
    </div>
  );
}

export default Connect;
