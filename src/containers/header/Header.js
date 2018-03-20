import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions as authUserActions } from '../../store/authUser';
import Logo from '../../components/logo/Logo';
import './Header.css';

class Header extends Component {
  render() {
    // const { user, logoutUser } = this.props;

    return (
      <div className="header row expanded">
        <div className="small-6 columns">
          <Logo />
        </div>
        {/* <div className="small-6 columns">
          {!user && (
            <ul className="header__right">
              <li>
                <Link to="/auth" className="header__link">
                  <i className="fa fa-user-o" aria-hidden="true" />&nbsp;Sign in
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <ul className="header__right">
              <li className="header__item">
                <Link
                  to="/dashboard"
                  className="header__link"
                  title="Dashboard"
                >
                  <i className="fa fa-dashboard" aria-hidden="true" />
                </Link>
              </li>
              <li className="header__item">
                <button
                  onClick={() => logoutUser()}
                  className="header__link"
                  title="Log out"
                >
                  <i className="fa fa-sign-out" aria-hidden="true" />
                </button>
              </li>
              <li className="header__item">
                <Avatar src={user.image} name={user.name} />
              </li>
            </ul>
          )}
        </div> */}
      </div>
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
