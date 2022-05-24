import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image';
import * as classes from './styles/project.module.css';

import github from '../images/github.svg';
import demo from '../images/demo.svg';

// COMPONENT
const Project = ({projectTitle, projectDesc, projectStack, projectImage, projectGithub, projectDemo, projectId}) => {
  return (
    <article className={classes.project}>
    <img src={projectImage} className={classes.project_preview} alt='work 01'/>
    <div>
      <p>Featured Project</p>
      
      <h3>{projectTitle}</h3>
      <span>{projectDesc}</span>
      <p>{projectStack}</p>

    
    </div>
      <aside>
        <a href={projectGithub} title={projectTitle + " Github link"} target={"_blank"}>
          <img src={github} alt='github'/>
        </a>
        <a href={projectDemo} title={projectTitle + " demo link"} target={"_blank"}>
          <img src={demo} alt='demo'/>
        </a>
      </aside>
  </article>
  )
}

export default Project;