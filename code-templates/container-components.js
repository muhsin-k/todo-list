import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as greetingActions } from '../../store/greeting';
import MyComponentCanvas from './MyComponentCanvas';

class MyComponent extends Component {
  render() {
    const childProps = {
      showGreeting: this.showGreeting,
    };
    return <MyComponentCanvas {...childProps} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showGreeting: () => dispatch(greetingActions.show()),
  };
};

MyComponent.propTypes = {
  greeting: PropTypes.string,
  showGreeting: PropTypes.func.isRequired,
};

MyComponent.defaultProps = {
  greeting: 'Hello',
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
