import React from 'react';
import PropTypes from 'prop-types';

import './MyComponent.css';

const MyComponent = (props) => {
  return (
    <div className="my-component">
      <h1 className="text-center">{props.greeting}! MyComponent</h1>
    </div>
  );
};

MyComponent.propTypes = {
  greeting: PropTypes.string,
};

MyComponent.defaultProps = {
  greeting: 'Hello',
};

export default MyComponent;
