import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // need access to these DOM elements
    this.popupElement = null;
    this.cueElement = null;
    this.targetElement = null;

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.targetElement = window.document.getElementById(this.props.target);
    // toggle on/off on click
    this.targetElement.addEventListener('click', this.toggle);
    console.log('popup: ', this.popupElement);
    console.log('cue: ', this.cueElement);
    console.log('target: ', this.targetElement);

    // toggle off the popup on render
    this.popupElement.style.display = 'none';
  }

  componentWillUnmount() {
    this.targetElement.removeEventListener('click', this.toggle);
    console.log('clearing listener..');
  }

  toggle() {
    console.log('toggling..');
    if (this.popupElement.style.display === 'none') {
      this.popupElement.style.display = 'block';
      this.calculatePositions();
    } else {
      this.popupElement.style.display = 'none';
    }
  }

  calculatePositions() {
    const targetDimensions = findDimensions(this.targetElement);
    const popupDimensions = findDimensions(this.popupElement);

    this.popupElement.style.left = `${targetDimensions.left}px`;
    this.popupElement.style.top = `${targetDimensions.top +
      targetDimensions.height +
      (Number(this.top) || 10)}px`;

    const { cuePos } = this.props;
    if (cuePos === 'pos1') {
      this.cueElement.style.left = '20px';
    }
    if (cuePos === 'pos2') {
      this.cueElement.style.left = `${popupDimensions.width / 2 - 5}px`;
    }
    if (cuePos === 'pos3') {
      this.cueElement.style.left = `${popupDimensions.width - 35}px`;
    }
  }

  render() {
    return (
      <div
        className="Popup"
        ref={(el) => {
          this.popupElement = el;
        }}
      >
        <span
          className="Popup__cue"
          ref={(cueElement) => {
            this.cueElement = cueElement;
          }}
        />
        {this.props.isList ? (
          <ul className="Popup__content">{this.props.children}</ul>
        ) : (
          <div className="Popup__content">{this.props.children}</div>
        )}
      </div>
    );
  }
}

Popup.propTypes = {
  target: PropTypes.string.isRequired,
  sidePos: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  cuePos: PropTypes.oneOf(['pos1', 'pos2', 'pos3']),
  isList: PropTypes.oneOf([true]),
  children: PropTypes.node.isRequired,
};

Popup.defaultProps = {
  sidePos: 'bottom',
  cuePos: 'pos2',
  isList: true,
};

export default Popup;

function findDimensions(obj) {
  const dimensions = [];
  dimensions.height = obj.offsetHeight;
  dimensions.width = obj.offsetWidth;
  // offsetLeft & offsetTop are relative to the nearest parent. So this does not
  // guarantee the absolute left & top values from the root(html). To calculate
  // the right dimensions starting from the root html, we traverse back to each
  // parent & keep on adding their left & top values until we reach the root parent.
  let curleft = 0;
  let curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
      /* eslint no-cond-assign: 0 */
      /* eslint no-param-reassign: 0 */
    } while ((obj = obj.offsetParent));
  }
  dimensions.left = curleft;
  dimensions.top = curtop;
  return dimensions;
}
