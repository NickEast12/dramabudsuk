import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <div>{children}</div>
  </>
);

export default Layout;
