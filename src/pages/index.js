import * as React from "react";
import { useState } from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Work from '../components/work';
import Action from '../components/action';
import Footer from '../components/footer';
import About from '../components/about';


// COMPONENT
const IndexPage = () => {
  const [about, setAbout] = useState(false)

  // VIEW
  return (
    <Layout pageTitle={"TJ Phan - Software Engineer"}>
      {about && <About />}
      <Navbar about={about} setAbout={setAbout}/>
      <Hero />
      <Work />
      <Action />
      <Footer />
    </Layout>
  )
};

export default IndexPage;
