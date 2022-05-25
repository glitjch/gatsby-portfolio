import React from 'react';
import * as classes from './styles/hero.module.css';
import Social from './social';

import logo from '../images/hero-logo.svg';


// COMPONENT
const Hero = ({ setAbout }) => {

  return (
    <header className={classes.hero}>
      <div>
        <h1>TJ Phan</h1>
        <h2>Software Developer</h2>
        <button type='button' onClick={() => setAbout("about")}>About Me</button>
      </div>
      <img className={classes.logo} src={logo} alt='logo'/>
      <Social />
    </header>
  )
}

export default Hero;