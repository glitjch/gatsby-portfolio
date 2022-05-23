import React from 'react';
import * as classes from './styles/hero.module.css';
import Social from './social'
const hero = () => {
  
  // to add
  // logo
  // social media bar side
  // About

  return (
    <header className={classes.hero}>
      <div>
        <h1>TJ Phan</h1>
        <h2>Software Developer</h2>
        <button type='button'>About Me</button>
      </div>
      <img alt='logo'/>
      <Social />
    </header>
  )
}

export default hero;