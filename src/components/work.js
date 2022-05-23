import React from 'react'

import * as classes from './styles/work.module.css';

import Project from './project';

// COMPONENT
const Work = () => {
  return (
    <div className={classes.work}>
      <h2>What I've built so far</h2>
      <section>
        <Project projectTitle={"Snappy"}/>
        <Project projectTitle={"Proxy Ritual"}/>
        <Project projectTitle={"Snappy"}/>
        <Project projectTitle={"Snappy"}/>
      </section>
    </div>
  )
}

export default Work