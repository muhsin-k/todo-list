import React from 'react';
import PropTypes from 'prop-types';

const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

MyLoadingComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({}),
  // error: PropTypes.object,
  // eslint-disable-line react/forbid-prop-types
};

MyLoadingComponent.defaultProps = {
  error: null,
};

export default MyLoadingComponent;
