import React from 'react'

import * as classes from './styles/work.module.css';

import Project from './project';

import Snappy from '../images/snappy.gif';

// COMPONENT
const Work = () => {
  return (
    <div className={classes.work}>
      <h2>What I've built so far</h2>
      <section>
        <Project 
          projectTitle={"Snappy"} 
          projectImage={Snappy} 
          projectId={"project_01"}
          projectDesc={"Want to land that valuable connection with that boss/star/career crush in the elevator? Open the    app, sprinkle a bit about yourself and let the trained ai to creat your personal elevator pitch, fast!"}
          projectStack={"ReactJS  ExpressJS  Components-CSS  Openai-API"}
          />
        <Project projectTitle={"Proxy Ritual"}/>
        <Project projectTitle={"Snappy"}/>
        <Project projectTitle={"Snappy"}/>
      </section>
    </div>
  )
}

export default Work