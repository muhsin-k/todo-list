import React from 'react';
import PropTypes from 'prop-types';
import './SocialButton.css';

const SocialButton = (props) => {
  // transform social type to its equivalent css class (if required)
  let { type: typeClass } = { ...props };
  if (props.type === 'google') {
    typeClass = 'google-plus';
  }
  const iconClasses = `
    fa fa-${typeClass}-square 
    SocialButton__icon 
    SocialButton__icon--${typeClass}`;
  return (
    <a className="SocialButton" href={props.to}>
      <i className={iconClasses} title={props.type} />
      <br />
      {props.noCaption === false && (
        <span className="SocialButton__caption">{props.type}</span>
      )}
    </a>
  );
};

SocialButton.propTypes = {
  type: PropTypes.oneOf(['facebook', 'google', 'linkedin']).isRequired,
  to: PropTypes.string.isRequired,
  noCaption: PropTypes.bool,
};
SocialButton.defaultProps = {
  noCaption: false,
};

export default SocialButton;
