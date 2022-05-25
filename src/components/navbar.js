import React from 'react'
import * as classes from './styles/navbar.module.css';
import logo from '../images/nav-logo.svg';

import { Link } from 'gatsby';

const Navbar = ( {about, setAbout} ) => {
  
  return (
    <nav className={classes.nav}> 
    <a id="top"></a>
    <div> 
      <a href='/'>
        <img src={logo} alt='logo for tj phan'/>
      </a>
      <ul>
        <li><Link to="#work">Work</Link></li>
        <li><Link to="#">Experiment</Link></li>
        <li onClick={() => setAbout(!about)}><Link to="#">Contact</ Link></li>
      </ul>
    </div>
    </nav>
  )}

export default Navbar;