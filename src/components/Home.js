/* eslint jsx-a11y/heading-has-content: "off" */
// TODO: check heading validation issue

import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import { h1 } from './Layout.css';

const Home = () => <Layout>
  <h1 className={h1}>Home</h1>
  <p>
    <Link to="/dynamic">Navigate to Dynaaaaamic Page</Link>
  </p>
</Layout>;

export default Home;