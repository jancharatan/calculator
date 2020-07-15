import React from 'react';
import PropTypes from 'prop-types';
import TabButton from './TabButton';
import '../pages/Pages.css';

const SelectorRow = ({ inputFunction, outputFunction, selectedInput, selectedOutput, value }) => (
  <div className="flex-helper">
    <TabButton handleClick={() => inputFunction(value)} isSelected={value === selectedInput}>
      {value}
    </TabButton>
    <TabButton handleClick={() => outputFunction(value)} isSelected={value === selectedOutput}>
      {value}
    </TabButton>
  </div>
);

SelectorRow.propTypes = {
  inputFunction: PropTypes.func.isRequired,
  outputFunction: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  selectedInput: PropTypes.string.isRequired,
  selectedOutput: PropTypes.string.isRequired,
};

export default SelectorRow;
