import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
// import DevTools from "./DevTools";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <App /> {/* <DevTools/> */}
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default Root;
