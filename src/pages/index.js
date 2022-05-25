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
import Contact from "../components/contact";


// COMPONENT
const IndexPage = () => {
  const [ mount, setMount ] = useState("")

  // VIEW
  return (
    <Layout pageTitle={"TJ Phan - Software Engineer"}>
      {mount === "about" && <About />}
      {mount === "contact" && <Contact />}
      <Navbar setContact={setMount}/>
      <Hero setAbout={setMount}/>
      <Work />
      <Action setAction={setMount}/>
      <Footer />
    </Layout>
  )
};

export default IndexPage;
