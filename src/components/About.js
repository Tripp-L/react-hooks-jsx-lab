import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I am a web developer, and i like to share my ideas!!</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
