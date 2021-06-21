import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';

const index = () => {
  const i = true;
  return (
    <Layout>
      <SEO />
      <div>
        <h1>Home page</h1>
      </div>
    </Layout>
  );
};

export default index;
