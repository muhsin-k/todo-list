import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
const logo = require("../../assets/logo.png");
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { logged: true };
    this.onLogOut = this.onLogOut.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("todoId")) {
      this.setState({ logged: true });
    } else {
      this.setState({ logged: false });
    }
  }
  onLogOut() {
    localStorage.clear();
    this.props.history.push("/auth/login");
  }
  renderContent() {
    if (this.props.auth.isLogged) {
      return [
        <li key="2">
          <a onClick={this.onLogOut} className="header-item">
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
