import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => <div><Link to="/">Home</Link>{children}<div id="test">test</div></div>;

export default Layout;