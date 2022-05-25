import React from 'react';

import * as classes from "./styles/about.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h2>About Me</h2>
      <h5>Full Stack Software Engineer</h5>
      <p>I architecture web applications with human factor. I work with all levels of complexity to produce simplicity at its best, whether that's designing your frontend web presence or structuring your server performance. Coding is an online wonderland of possibilities, and helping others realize theirs is my worldly passion.</p>
      <p>Say hi, I'm super friendly</p>
      <ul>
        <img alt='tech'/>
        <img alt='tech'/>
        <img alt='tech'/>
        <img alt='tech'/>
        <img alt='tech'/>
        <img alt='tech'/>
        <img alt='tech'/>
      </ul>
    </div>
  );
};

export default About;