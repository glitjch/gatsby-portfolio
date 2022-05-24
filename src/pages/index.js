import * as React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Navbar from '../components/navbar'
import Hero from '../components/hero';
import Work from '../components/work';
import Action from '../components/action';

// COMPONENT
const IndexPage = () => {

  // VIEW
  return (
    <Layout pageTitle={"TJ Phan - Software Engineer"}>
      <Navbar />
      <Hero />
      <Work />
      <Action />
      
      <Link to='about'>About</Link>
    </Layout>
  )
};

export default IndexPage;
