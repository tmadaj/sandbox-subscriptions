import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '75%',
        margin: `0 auto`,
        padding: `3rem 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
