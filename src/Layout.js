import React, { PropTypes } from 'react';

import Home from './Home';


function Layout({ children }) {
  return (
    <div>
      {children || <Home />}
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;

