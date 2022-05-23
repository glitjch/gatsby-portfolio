import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle={"About TJ"}>
      <h1>The Story So Far</h1>
      <p>Ten years in the medical field as an optician, TJ gained insight on personable customer service, listening beyond standard client needs, as people trusted him enough to share their personal passions and challenges. He increasingly realized that helping people is his calling, but his service to others was limited, believing his untapped creative potential could support others so much more. After years of plain medical software applications, countless patient stories that could’ve used solutions by design, TJ took a chance with coding as the outlet to influence change. There was no turning back.</p>
      <Link to="/">Return Home</Link>
  </Layout>
  );
};

export default AboutPage;