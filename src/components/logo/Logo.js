import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = (props) => {
  return (
    <span className={`Logo Logo--${props.size}`}>
      <Link to="/" className="Logo__link">
        Live-Support
      </Link>
    </span>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

Logo.defaultProps = {
  size: 'small',
};

export default Logo;
