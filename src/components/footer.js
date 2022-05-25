import React from 'react'

import * as classes from './styles/footer.module.css';

import logo from '../images/nav-logo.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      
      <section>
        <a href='#top'>
          <img src={logo} alt='logo for tj phan'/>
        </a>
        <ul>
          <a href='https://github.com/glitjch' target={"_blank"}>
            <li>Github</li>
          </a>
          <a href='https://www.linkedin.com/in/tj-phan/' target={"_blank"}>
            <li>LinkedIn</li>      </a>
          <a href='https://dev.to/glitjch' target={"_blank"}>
            <li>Dev</li>
          </a>
          <a href='https://angel.co/u/tj-phan' target={"_blank"}>
            <li>AngelList</li>
          </a>
          <a href='https://twitter.com/hellotjphan' target={"_blank"}>
            <li>Twitter</li>
          </a>
        </ul>
        <p>© 2022 TJ Phan, designed and built by. Spread the Love.</p>
      </section>

    </footer >
  );
};

export default Footer;