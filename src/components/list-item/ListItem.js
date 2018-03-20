import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ListItem.css';

const ListItem = (props) => {
  // either link or onClick is allowed
  if (props.link && props.onClick) {
    return new Error('Both link & onClick is not acceptable. Provide either.');
  }
  let icon = '';
  if (props.icon) {
    icon = <i className={`ListItem__icon fa fa-${props.icon}`} />;
  }
  return (
    <li className="ListItem">
      {props.link && (
        <Link className="ListItem__link" to={props.link}>
          {icon}
          <span className="ListItem__name">{props.name}</span>
        </Link>
      )}
      {props.onClick && (
        <button className="ListItem__link" onClick={props.onClick}>
          {icon}
          <span className="ListItem__name">{props.name}</span>
        </button>
      )}
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  icon: null,
  link: null,
  onClick: null,
};

export default ListItem;
