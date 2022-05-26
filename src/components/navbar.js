import React from 'react'
import * as classes from './styles/navbar.module.css';
import logo from '../images/nav-logo.svg';

import { useGlobalContext } from "../components/layout";

import { Link } from 'gatsby';

const Navbar = () => {
  const { mount, setMount } = useGlobalContext();
  
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
        <li onClick={() => setMount("contact")}><Link to="#">Contact</ Link></li>
        {mount && mount}
      </ul>
    </div>
    </nav>
  )}

export default Navbar;