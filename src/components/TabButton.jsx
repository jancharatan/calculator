import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const TabButton = ({ children, isSelected, handleClick }) => (
  <button type="button" className={`tab-button-wrapper ${isSelected ? 'tab-button-selected' : ''}`} onClick={() => handleClick(children)}>
    {children}
  </button>
);

TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

TabButton.defaultProps = {
  isSelected: false,
};

export default TabButton;
