import React from 'react';

import * as classes from "./styles/about.module.css";
import TechJS from '../images/tech-js.svg';
import TechReact from '../images/tech-react.svg';
import TechNodejs from '../images/tech-nodejs.svg';
import TechGithub from '../images/tech-github.svg';
import TechPostgresql from '../images/tech-postgresql.svg';
import TechRuby from '../images/tech-ruby.svg';
import TechTypescript from '../images/tech-typescript.svg';
import TechHtml from '../images/tech-html.svg';
import TechCss from '../images/tech-css.svg';



const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.backdrop}>
        <h2>About Me</h2>
      </div>
      <h5>Full Stack Software Engineer</h5>
        <p>I architect web applications with human factor. I work with all levels of complexity to produce simplicity at its best, whether that's designing your frontend web presence or structuring your server performance. Coding is an online wonderland of possibilities, and helping others realize theirs is my worldly passion. <br/>
        I'm super friendly, say hello. </p>
      <ul>
        <img src={TechJS} alt='tech'/>
        <img src={TechReact} alt='tech'/>
        <img src={TechNodejs} alt='tech'/>
        <img src={TechGithub} alt='tech'/>
        <img src={TechPostgresql} alt='tech'/>
        <img src={TechTypescript} alt='tech'/>
        <img src={TechRuby} alt='tech'/>
      </ul>
    </div>
  );
};

export default About;