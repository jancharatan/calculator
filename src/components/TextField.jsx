import React from 'react';
import './TextField.css';
import PropTypes from 'prop-types';

const TextField = ({ isOutput, isTitle, titleText }) => (
  <div className="textfield-wrapper">
    <input className={`textfield ${isTitle ? 'title-styling' : null}`} type="text" disabled={isOutput} value={titleText} />
  </div>
);

TextField.propTypes = {
  isOutput: PropTypes.bool,
  isTitle: PropTypes.bool,
  titleText: PropTypes.string,
};

TextField.defaultProps = {
  isOutput: false,
  isTitle: false,
  titleText: undefined,
};

export default TextField;
