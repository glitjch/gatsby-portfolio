import React from 'react'

import github from '../images/github.svg'
import demo from '../images/demo.svg'

const Project = ({projectTitle, projectDesc, projectStack, projectImage, projectGithub, projectDemo}) => {
  return (
    <article>
    <div>
      <p>Featured Project</p>
      <h3>{projectTitle}</h3>
      <p>{projectDesc}</p>
      <h4>{projectStack}</h4>
      <a href={projectGithub} title={projectTitle + " Github link"} target={"_blank"}>
        <img src={github} alt='github'/>
      </a>
      <a href={projectDemo} title={projectTitle + " demo link"} target={"_blank"}>
        <img src={demo} alt='demo'/>
      </a>
    </div>
    <img src={projectImage} className='workimg' alt='work 01'/>
  </article>
  )
}

export default Project;