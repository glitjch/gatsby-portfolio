import React from 'react'
import * as classes from './styles/social.module.css';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import dev from '../images/dev.svg';
import angel from '../images/angel.svg';
import twitter from '../images/twitter.svg';

// COMPONENT
const Social = () => {
  return (
    <ul className={classes.social}>
      <a href='https://github.com/glitjch' target={"_blank"} rel={"noreferrer"}>
        <img src={github} alt="social github"/>
      </a>
      <a href='https://www.linkedin.com/in/tj-phan/' target={"_blank"} rel={"noreferrer"}>
        <img src={linkedin} alt="social"/>
      </a>
      <a href='https://dev.to/glitjch' target={"_blank"} rel={"noreferrer"}>
        <img src={dev} alt="social"/>
      </a>
      <a href='https://angel.co/u/tj-phan' target={"_blank"} rel={"noreferrer"}>
        <img src={angel} alt="social"/>
      </a>
      <a href='https://twitter.com/hellotjphan' target={"_blank"} rel={"noreferrer"}>
        <img src={twitter} alt="social"/>
      </a>
    </ul>
  )
}

export default Social