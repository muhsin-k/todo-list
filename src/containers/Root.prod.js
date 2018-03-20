import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// disable service worker until initial production deployment
// know the caching caveats before enabling it early on:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#opting-out-of-caching
// registerServiceWorker();

Root.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default Root;
