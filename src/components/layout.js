import * as React from 'react';
import * as classes from './styles/layout.module.css'

// COMPONENT
const Layout = ({ pageTitle, children }) => {

  // VIEW
  return (
    <div className={classes.container}>
      <title>{pageTitle}</title>
      <main>
        {children}
      </main> 
    </div>
  );
};

export default Layout;