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

import CloseIcon from './closeIcon';

import { useGlobalContext } from './layout';


const About = () => {
  const { mount } = useGlobalContext();
  return mount === "about" && (
    <div className={classes.about}>
      <CloseIcon />
      <div className={classes.backdrop}>
        <h2>About Me</h2>
      </div>
      <h5>Full Stack Software Engineer</h5>
        <p>I design and build web applications with the world in mind. I start by asking questions about the complexity of personalized needs in order to produce simplicity at its best, whether that's designing client-side web presence or structuring server performance. It's an online wonderland of possibilities, and helping others figure out their digital branding success is my passion. <br/>
        Super friendly, say hello. </p>
      <ul>
        <img src={TechJS} alt='tech'/>
        <img src={TechReact} alt='tech'/>
        <img src={TechNodejs} alt='tech'/>
        <img src={TechGithub} alt='tech'/>
        <img src={TechPostgresql} alt='tech'/>
        <img src={TechTypescript} alt='tech'/>
        <img src={TechRuby} alt='tech'/>
        <img src={TechHtml} alt='tech'/>
        <img src={TechCss} alt='tech'/>
      </ul>
    </div>
  );
};

export default About;