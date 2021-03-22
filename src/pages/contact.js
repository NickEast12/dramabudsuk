import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const Contact = ({ location }) => {
  const i = true;
  return (
    <Layout location={location}>
      <h1 className="title--bold">Contact page</h1>
      <Link to="/">home</Link>
    </Layout>
  );
};

export default Contact;
