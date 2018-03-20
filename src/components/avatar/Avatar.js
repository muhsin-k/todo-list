import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';
import defaultAvatar from './default-avatar.png';

const Avatar = (props) => (
  <img
    className={`Avatar Avatar--${props.size}`}
    src={props.src}
    alt={props.name}
    title={props.name}
  />
);

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  size: 'small',
  src: defaultAvatar,
};

export default Avatar;
