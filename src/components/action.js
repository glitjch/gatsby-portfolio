import React from 'react'
import * as classes from './styles/action.module.css';

const Action = () => {
  return (
    <section className={classes.action}>
      <button type='button'>
        <h2>Say Hello</h2>  
      </button>
      <p>Proud Canadian Software Engineer from Coquitlam, British Columbia.</p>
      <p>ESG-focused (Environment-Social-Governance).</p>
    </section>
  )
}

export default Action;