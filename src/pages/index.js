import * as React from "react"
import { Link } from 'gatsby';

// COMPONENT
const IndexPage = () => {

  // VIEW
  return (
    <main>
      <title>TJ Phan - Software Engineer</title>
      <Link to='about'>About</Link>
      <h1>Hi, I'm TJ!</h1>
      <p>Canadian Software Engineer from Coquitlam, British Columbia.</p>
      <p>I'm passionate about building software services that help communities to thrive and support pursuits of personal wellbeing.</p>
      <p>ESG-focused (Environment-Social-Governance).</p>
    </main>
  )
}

export default IndexPage
