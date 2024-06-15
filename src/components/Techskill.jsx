import React from "react";
import Skill from "./Skill";
import Typography from "@mui/material/Typography";

const images = [
  require("../assets/Programming/Bootstrap.jpeg"),
  require("../assets/Programming/C++.png"),
  require("../assets/Programming/C.jpg"),
  require("../assets/Programming/CSS.png"),
  require("../assets/Programming/ExpressJs.jpeg"),
  require("../assets/Programming/Git.png"),
  require("../assets/Programming/HTML.jpg"),
  require("../assets/Programming/Javascript.jpeg"),
  require("../assets/Programming/MongoDb.jpg"),
  require("../assets/Programming/NodeJs.png"),
  require("../assets/Programming/Pug.jpeg"),
  require("../assets/Programming/Python.jpeg"),
  require("../assets/Programming/ReactJs.jpg"),
  require("../assets/Programming/SQL.jpg"),
  require("../assets/Programming/Shell.jpeg"),
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

export default function Techskill() {
  return (
    <div className="skills">
    <Typography variant="h4" align="center">Technical Skills</Typography>
      <Skill images={images} speed={5000} />
    </div>
  );
}
