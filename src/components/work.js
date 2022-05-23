import React from 'react'

import * as classes from './styles/work.module.css';

import Project from './project';

// COMPONENT
const Work = () => {
  return (
    <div className={classes.work}>
      <h2>What I've built so far</h2>
      <Project projectTitle={"Snappy"}/>
      <article>
        <div>
          <p>Featured Project</p>
          <h3>Title</h3>
          <p>Description of work</p>
          <h4>Tech stack:</h4>
          <img alt='github'/>
          <img alt='demo'/>
        </div>
        <img className='workimg' alt='work 01'/>
      </article>
      <article>Work 02</article>
      <article>Work 03</article>
      <article>Work 04</article>
    </div>
  )
}

export default Work