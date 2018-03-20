import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/about" className="footer__links">
          About
        </Link>
        <Link to="/terms-of-use" className="footer__links">
          Terms of Use
        </Link>
        <Link to="/privacy-policy" className="footer__links">
          Privacy Policy
        </Link>
        <span className="footer__copyright">
          &copy; 2018 LearnOnLive. All rights reserved.
        </span>
      </div>
    );
  }
}

export default Footer;
