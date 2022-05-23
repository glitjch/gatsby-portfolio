import * as React from 'react';
import * as classes from './styles/layout.module.css'

import Navbar from './navbar'
// COMPONENT
const Layout = ({ pageTitle, children }) => {

  // VIEW
  return (
    <div className={classes.container}>
      <Navbar />
      <title>{pageTitle}</title>
      
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;