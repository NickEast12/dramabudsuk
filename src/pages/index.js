import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';
import Test from '../svgs/PR-illustration-2.svg';

const index = ({ location }) => {
  const i = true;
  return (
    <Layout location={location}>
      <SEO />
      <div>
        <h1>Home page</h1>
      </div>
    </Layout>
  );
};

export default index;
