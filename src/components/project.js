import React from 'react'

import * as classes from './styles/project.module.css';

import github from '../images/github.svg';
import demo from '../images/demo.svg';

// COMPONENT
const Project = ({projectTitle, projectDesc, projectStack, projectImage, projectGithub, projectDemo, projectId}) => {
  return (
    <article className={classes.project}>
      <div className={classes.visuals}>
        <aside>
          <a href={projectDemo} title={projectTitle + " demo link"} target={"_blank"}>
            <img src={demo} alt='demo'/>
          </a>
          <a href={projectGithub} title={projectTitle + " Github link"} target={"_blank"}>
            <img src={github} alt='github'/>
          </a>
        </aside>
        <img src={projectImage} className={classes.project_preview} alt='work 01'/>
      </div>
      <div className={classes.description}>
        <p>Featured Project</p>
        <h3>{projectTitle}</h3>
        <span>{projectDesc}</span>
        <p>{projectStack}</p>  
      </div>
    </article>
  )
}

export default Project;