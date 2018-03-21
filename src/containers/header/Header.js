import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import { actions as authUserActions } from '../../store/authUser';
// import Logo from '../../components/logo/Logo';
import './Header.css';

class Header extends Component {
  render() {
    // const { user, logoutUser } = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">To Do List</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  } // end of render
}

Header.propTypes = {
  user: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.authUser.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(authUserActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
