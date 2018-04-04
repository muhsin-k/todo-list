import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
const logo = require("../../assets/logo.png");
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: true };
  }
  componentDidMount() {
    if (localStorage.getItem("todoId")) {
      this.setState({ logged: true });
    } else {
      this.setState({ logged: false });
    }
  }
  renderContent() {
    if (this.state.logged) {
      return [
        // <li key="3" style={{ margin: "0 10px" }}>
        //   <Link to="/home" className="header-item">
        //     My List
        //   </Link>
        // </li>,
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
            <img src={logo} />
          </a>

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
