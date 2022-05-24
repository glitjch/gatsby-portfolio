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
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Dev</li>
          <li>AngelList</li>
        </ul>
        <p>© 2022 TJ Phan, designed and built by. Spread the Love.</p>
      </section>

    </footer >
  );
};

export default Footer;