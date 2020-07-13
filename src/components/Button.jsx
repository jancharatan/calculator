import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const isOperator = (val) => ['+', '-', '*', '/'].includes(val);

const Button = ({ handleClick, children }) => (
  <button
    type="button"
    className={`button-wrapper ${isOperator(children) ? null : 'operator'}`}
    onClick={() => handleClick(children)}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
