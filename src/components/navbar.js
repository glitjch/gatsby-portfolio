import React from 'react'
import * as classes from './styles/navbar.module.css';
import logo from '../images/nav-logo.svg';

import { useGlobalContext } from "../components/layout";

import { Link } from 'gatsby';

const Navbar = () => {
  const { setMount } = useGlobalContext();
  
  return (
    <nav className={classes.nav}> 
    <span id="top"> </span>
    <div> 
      <a href='/'>
        <img src={logo} alt='logo for tj phan'/>
      </a>
      <ul>
        <li><Link to="#work">Work</Link></li>
        <li><Link to="#">Experiment</Link></li>
        <li>
          <span 
            role={"button"}
            tabIndex={0}
            onClick={() => setMount("contact")} 
            onKeyDown={() => setMount("contact")}
            >
            <Link to="#">Contact</ Link>
          </span>
          </li>
      </ul>
    </div>
    </nav>
  )}

export default Navbar;