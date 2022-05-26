import React from 'react'
import * as classes from './styles/action.module.css';
import { useGlobalContext } from './layout';

const Action = ({ setAction }) => {
  const { setMount } = useGlobalContext();

  return (
    <section className={classes.action}>
      <button type='button' onClick={() => setMount("contact")}>
        <h2>Say Hello</h2>  
      </button>
      <p>Proud Canadian Software Engineer from Coquitlam, British Columbia.</p>
      <p>ESG-focused (Environment-Social-Governance).</p>
    </section>
  )
}

export default Action;