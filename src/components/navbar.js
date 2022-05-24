import React from 'react'
import * as classes from './styles/navbar.module.css';
import logo from '../images/nav-logo.svg';

import { Link } from 'gatsby';

const Navbar = () => {
  
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
        <li><Link to="#">Contact</ Link></li>
      </ul>
    </div>
    </nav>
  )}

export default Navbar;