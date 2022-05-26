import * as React from "react";

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Work from '../components/work';
import Action from '../components/action';
import Footer from '../components/footer';
import About from '../components/about';
import Contact from "../components/contact";

import { useGlobalContext } from "../components/layout";

// COMPONENT
const IndexPage = () => {
  const { mount } = useGlobalContext();
  
  // VIEW
  return (
    <Layout pageTitle={"TJ Phan - Software Engineer"}>

      {mount === "about" && <About />}
      <Contact />
      <Navbar />
      <Hero />
      <Work />
      <Action />
      <Footer />
    </Layout>
  )
};

export default IndexPage;
