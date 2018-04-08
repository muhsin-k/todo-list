import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { completeLogin } from "../../actions/index";

const logo = require("../../assets/logo.png");
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: true };
  }
  componentDidMount() {
    if (localStorage.getItem("todoId")) {
      this.props.completeLogin();
    } else {
    }
  }
  renderContent() {
    if (this.props.auth.isLogged) {
      return [
        <li key="2">
          <Link to="/auth/login" className="header-item">
            Logout
          </Link>
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
          <a href="#!" className="brand-logo">
            <img alt="logo" src={logo} />
          </a>

          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function bindAction(dispatch) {
  return {
    completeLogin: () => dispatch(completeLogin())
  };
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, bindAction)(Header);
