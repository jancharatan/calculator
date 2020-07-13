import React from 'react';
import './ClearButton.css';
import PropTypes from 'prop-types';

const ClearButton = ({ children, handleClear }) => (
  <button type="button" className="reset-style clear-btn" onClick={handleClear}>
    {children}
  </button>
);

ClearButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default ClearButton;
