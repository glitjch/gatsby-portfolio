import React from 'react'

import * as classes from './styles/work.module.css';

import Project from './project';

import Snappy from '../images/snappy.gif';
import ProxyRitual from '../images/proxy-ritual.gif';
// import PawFive from '../images/pawfive.gif';
import Scheduler from '../images/schedule-interviewer.gif';
import Tweetr from '../images/tweetr.gif';


// COMPONENT
const Work = () => {
  return (
    <div className={classes.work} id="work">
      <h2>Case Studies</h2>
      <section>
        <Project 
          projectTitle={"Snappy"} 
          projectImage={Snappy} 
          projectId={"project_01"}
          projectDesc={"Want to land that valuable connection with that boss/star/career crush in the elevator? Open the    app, sprinkle a bit about yourself and let the trained ai to creat your personal elevator pitch, fast!"}
          projectStack={"ReactJS  ExpressJS  Components-CSS  Openai-API"}
          projectGithub={"https://github.com/glitjch/snappy"}
          projectDemo={"https://snappy-by-glitjch.herokuapp.com/"}
          />
        <Project 
          projectTitle={"Proxy Ritual"}
          projectImage={ProxyRitual} 
          projectId={"project_02"}
          projectDesc={"Big game time is lost when there aren't enough duplicate cards in Arkham Horror LCG, a multiplayer campaigning card game. This app finds your deck, formats them to be ready for printing. No more hand-written proxying and more time to play."}
          projectStack={"ReactJS Typescript Sass Axios PrintJS"}
          projectGithub={"https://github.com/glitjch/arkhamlcg-image-decker"}
          projectDemo={"https://proxy-ritual.netlify.app/"}
          />
        <Project 
          projectTitle={"Interview Scheduler"}
          projectImage={Scheduler} 
          projectId={"project_03"}
          projectDesc={"Designed for busy appointment schedulers, the Scheduler helps experts and novices find their booking routines made easily managed with a few clicks."}
          projectStack={"ReachJS Axios Cypress Storybook Jest"}
          projectGithub={"https://github.com/glitjch/scheduler"}
          projectDemo={""}
          />
        <Project 
          projectTitle={"Tweetr"}
          projectImage={Tweetr} 
          projectId={"project_04"}
          projectDesc={"Let the world hear your thoughts! Join other users in creating easy snippets of ideas or opinions and browse them through threads. CSS-focused project."}
          projectStack={"ExpressJS Node-5.10 Chance Body-Parser Jquery"}
          projectGithub={"https://camo.githubusercontent.com/d06166ebac9677e977f6a2bc69c09a506472fa5490f899fe8ab5d796ca0c6969/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d7c266d6573736167653d436f646526636f6c6f723d696e666f726d6174696f6e616c267374796c653d706c6173746963266c6f676f3d676974687562266c6f676f2d636f6c6f723d7768697465"}
          projectDemo={"https://github.com/glitjch/tweeter"}
          />
      </section>
    </div>
  )
}

export default Work;