import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = ({ input }) => <div className="input">{input}</div>;

Input.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Input;
