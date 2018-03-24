import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  renderContent() {
    return [
      <li key="3" style={{ margin: "0 10px" }}>
        <Link to="/home" className="header-item">
          My List
        </Link>
      </li>,
      <li key="2">
        <a href={"/auth/logout"} className="header-item">
          Logout
        </a>
      </li>
    ];
  }

  render() {
    return (
      <nav className="white z-depth-0">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/blogs" : "/"}
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
