import * as React from 'react';
import * as classes from './styles/layout.module.css'

import { createContext, useContext, useState } from 'react';


export const GlobalContext = createContext({});
export const useGlobalContext = () => useContext(GlobalContext);

// COMPONENT
const Layout = ({ pageTitle, children }) => {
  const [ mount, setMount ] = useState("");

  const contextProvider = {
    setMount,
    mount,
  };

  // VIEW
  return (
    <GlobalContext.Provider value={contextProvider}>
      <div className={classes.container}>
        <title>{pageTitle}</title>
        <main>
          {children}
        </main> 
      </div>
    </GlobalContext.Provider>
  );
};

export default Layout;