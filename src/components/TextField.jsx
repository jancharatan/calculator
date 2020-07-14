import React from 'react';
import './TextField.css';
import PropTypes from 'prop-types';

const TextField = ({
  isOutput, isTitle, titleText, evaluateValue,
}) => (
    <div className="textfield-wrapper">
      <input className={`textfield ${isTitle ? 'title-styling' : null}`} type="text" disabled={isOutput} value={titleText} onChange={(event) => evaluateValue(event)} />
    </div>
  );

TextField.propTypes = {
  isOutput: PropTypes.bool,
  isTitle: PropTypes.bool,
  titleText: PropTypes.string,
  evaluateValue: PropTypes.func,
};

TextField.defaultProps = {
  isOutput: false,
  isTitle: false,
  titleText: undefined,
  evaluateValue: undefined,
};

export default TextField;
