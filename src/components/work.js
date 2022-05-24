import React from 'react'

import * as classes from './styles/work.module.css';

import Project from './project';

import Snappy from '../images/snappy.gif';
import ProxyRitual from '../images/proxy-ritual.gif';
import PawFive from '../images/pawfive.gif';
import Scheduler from '../images/schedule-interviewer.gif';
import Tweetr from '../images/tweetr.gif';


// COMPONENT
const Work = () => {
  return (
    <div className={classes.work}>
      <a id="work"/>
      <h2>Case Studies</h2>
      <section>
        <Project 
          projectTitle={"Snappy"} 
          projectImage={Snappy} 
          projectId={"project_01"}
          projectDesc={"Want to land that valuable connection with that boss/star/career crush in the elevator? Open the    app, sprinkle a bit about yourself and let the trained ai to creat your personal elevator pitch, fast!"}
          projectStack={"ReactJS  ExpressJS  Components-CSS  Openai-API"}
          />
        <Project 
          projectTitle={"Proxy Ritual"}
          projectImage={ProxyRitual} 
          projectId={"project_02"}
          projectDesc={"Big game time is lost when there aren't enough duplicate cards in Arkham Horror LCG, a multiplayer campaigning card game. This app finds your deck, formats them to be ready for printing. No more hand-written proxying and more time to play."}
          projectStack={"ReactJS Typescript Sass Axios PrintJS"}
          />
        <Project 
          projectTitle={"Interview Scheduler"}
          projectImage={Scheduler} 
          projectId={"project_03"}
          projectDesc={"Designed for busy appointment schedulers, the Scheduler helps experts and novices find their booking routines made easily managed with a few clicks."}
          projectStack={"ReachJS Axios Cypress Storybook Jest"}
          />
        <Project 
          projectTitle={"Tweetr"}
          projectImage={Tweetr} 
          projectId={"project_04"}
          projectDesc={"Let the world hear your thoughts! Join other users in creating easy snippets of ideas or opinions and browse them through threads. CSS-focused project."}
          projectStack={"ExpressJS Node-5.10 Chance Body-Parser Jquery"}
          />
      </section>
    </div>
  )
}

export default Work