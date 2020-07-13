import React from 'react';
import './RouteButton.css';
import PropTypes from 'prop-types';

const RouteButton = ({ children, isBig, notFirst }) => (
  <button type="button" className={`${isBig ? 'routebutton-wrapper-big' : 'routebutton-wrapper-small'} ${notFirst ? 'top-margin' : ''}`}>
    {children}
  </button>
);

RouteButton.propTypes = {
  children: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
  notFirst: PropTypes.bool,
};

RouteButton.defaultProps = {
  isBig: false,
  notFirst: false,
};

export default RouteButton;
