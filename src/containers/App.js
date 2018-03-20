import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Routes from './Routes';
import '../styles/base.css';

class App extends Component {
  componentDidMount() {
    this.props.showLoading();
    setTimeout(() => {
      this.props.hideLoading();
    }, 5000);
  }

  render() {
    return (
      <div>
        <LoadingBar
          style={{
            backgroundColor: '#6BC090',
            height: '2px',
          }}
        />
        {this.props.isHeaderFooterActive() && <Header />}
        <Routes />
        {this.props.isHeaderFooterActive() && <Footer />}
      </div>
    );
  }
}

App.propTypes = {
  showLoading: PropTypes.func.isRequired,
  hideLoading: PropTypes.func.isRequired,
  isHeaderFooterActive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isHeaderFooterActive: () => state.layout.header && state.layout.footer,
});

const mapDispatchToProps = (dispatch) => ({
  showLoading: () => dispatch(showLoading()),
  hideLoading: () => dispatch(hideLoading()),
});

// without using withRouter, route changes only reflect in url but not on page.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
