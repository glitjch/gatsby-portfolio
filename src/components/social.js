import React from 'react'
import * as classes from './styles/social.module.css';

import { StaticImage } from "gatsby-plugin-image"

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import dev from '../images/dev.svg';
import angel from '../images/angel.svg';
import twitter from '../images/twitter.svg';

// COMPONENT
const Social = () => {
  return (
    <ul className={classes.social}>
      <img src={github} alt="social"/>
      <img src={linkedin} alt="social"/>
      <StaticImage className={classes.hi} src="twitter.svg" alt='social'/>
      <img src={dev} alt="social"/>
      <img src={angel} alt="social"/>
      <img src={twitter} alt="social"/>
    </ul>
  )
}

export default Social