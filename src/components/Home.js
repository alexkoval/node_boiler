import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import { h1 } from './Layout.css';

const Home = () => {
  const title = 'Home';

  return (
    <Layout>
      <h1 className={h1}>{title}</h1>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;