import React from "react";
import profile from "../assets/images/profile.png";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <div className="header">
      <div className="home"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "70vh",
          padding: "12% 10% 10% 15%",
          color: "white",
        }}
      >
        <Typography variant="h3">Hello! I am Keshav Tulsyan</Typography>
        <Typography variant="h4">a Software Engineer</Typography>
        <Typography variant="h5">
          "I find that constantly trying out new things keeps me up to date."
        </Typography>
      </div>
      <img src={profile} alt="profile" />
    </div>
  );
};
