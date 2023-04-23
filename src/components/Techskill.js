import React from "react";
import Skill from "./Skill"

const images = [
  require('./Programming/Bootstrap.jpeg'),
  require('./Programming/C++.png'),
  require('./Programming/C.jpg'),
  require('./Programming/CSS.png'),
  require('./Programming/ExpressJs.jpeg'),
  require('./Programming/Git.png'),
  require('./Programming/HTML.jpg'),
  require('./Programming/Javascript.jpeg'),
  require('./Programming/MongoDb.jpg'),
  require('./Programming/NodeJs.png'),
  require('./Programming/Pug.jpeg'),
  require('./Programming/Python.jpeg'),
  require('./Programming/ReactJs.jpg'),
  require('./Programming/SQL.jpg'),
  require('./Programming/Shell.jpeg'),
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

export default function Techskill() {
  return (
    <div className="">
      <h1>Technical Skills</h1>
      <Skill images={images} speed={5000} />
    </div>
  );
}
