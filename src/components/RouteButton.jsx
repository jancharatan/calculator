import React from 'react';
import './RouteButton.css';
import PropTypes from 'prop-types';

const RouteButton = ({ children, isBig }) => (
  <button type="button" className={`${isBig ? 'routebutton-wrapper-big' : 'routebutton-wrapper-small'}`}>
    {children}
  </button>
);

RouteButton.propTypes = {
  children: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
};

RouteButton.defaultProps = {
  isBig: false,
};

export default RouteButton;
