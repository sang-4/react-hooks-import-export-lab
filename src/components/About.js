import React from "react";
import {image} from "../data/user";
export default About;

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I work with HTML, JavaScript, React...</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
