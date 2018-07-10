import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => <div><Link to="/">Home</Link>{children}<div id="test">test</div></div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;