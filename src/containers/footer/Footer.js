import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footer__copyright">
          Love <i className="fa fa-heart" aria-hidden="true" /> React
        </span>
      </div>
    );
  }
}

export default Footer;
