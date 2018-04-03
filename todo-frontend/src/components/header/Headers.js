import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  renderContent() {
    if (this.props.auth) {
      return [
        <li key="3" style={{ margin: "0 10px" }}>
          <Link to="/home" className="header-item">
            My List
          </Link>
        </li>,
        <li key="2">
          <a href={"auth/logout"} className="header-item">
            Logout
          </a>
        </li>
      ];
    } else {
      return [
        <li key="3">
          <Link to="/auth/login" className="header-item">
            Login
          </Link>
        </li>,
        <li key="2">
          <Link to="/auth/signup" className="header-item">
            Signup
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav
        className="z-depth-0"
        style={{ backgroundColor: "transparent !important" }}
      >
        <div className="nav-wrapper">
          <Link
            to="/"
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            To Do List
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
