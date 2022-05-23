import * as React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Navbar from '../components/navbar'
import Hero from '../components/hero';
import Work from '../components/work';

// COMPONENT
const IndexPage = () => {

  // VIEW
  return (
    <Layout pageTitle={"TJ Phan - Software Engineer"}>
      <Navbar />
      <Hero />
      <Work />
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <p>Canadian Software Engineer from Coquitlam, British Columbia.</p>
      <p>I'm passionate about building software services that help communities to thrive and support pursuits of personal wellbeing.</p>
      <p>ESG-focused (Environment-Social-Governance).</p>
      <Link to='about'>About</Link>
    </Layout>
  )
}

export default IndexPage
