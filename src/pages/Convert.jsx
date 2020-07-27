import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import math from 'mathjs';
import RouteButton from '../components/RouteButton';
import './Pages.css';
import '../components/TextField.css';
import TextField from '../components/TextField';
import TabButton from '../components/TabButton';
import SelectorRow from '../components/SelectorRow';
import { lengthUnits, timeUnits, temperatureUnits, areaUnits, volumeUnits, weightUnits } from '../unitTypes';

const Convert = () => {
  const [selectedType, setSelectedType] = useState('Length');
  const [lengthInput, setLengthInput] = useState('Meter');
  const [lenghOutput, setLengthOutput] = useState('Meter');
  const [timeInput, setTimeInput] = useState('Second');
  const [timeOutput, setTimeOutput] = useState('Second');
  const [temperatureInput, setTemperatureInput] = useState('Celsius');
  const [temperatureOutput, setTemperatureOutput] = useState('Celsius');
  const [areaInput, setAreaInput] = useState('Square Meter');
  const [areaOutput, setAreaOutput] = useState('Square Meter');
  const [volumeInput, setVolumeInput] = useState('Cubic Meter');
  const [volumeOutput, setVolumeOutput] = useState('Cubic Meter');
  const [weightInput, setWeightInput] = useState('Kilogram');
  const [weightOutput, setWeightOutput] = useState('Kilogram');
  const [currentInput, setCurrentInput] = useState('');

  const categories = ['Length', 'Time', 'Temperature', 'Area', 'Volume', 'Weight'];

  const areaConversions = {
    'Square Meter': 'm2',
    'Square Kilometer': 'km2',
    'Square Centimeter': 'cm2',
    Hectare: 'hectare',
    'Square Mile': 'sqmi',
    'Square Yard': 'sqyd',
    'Square Foot': 'sqft',
    'Square Inch': 'sqin',
    Acre: 'acre',
  };

  const volumeConversions = {
    'Cubic Meter': 'm3',
    'Cubic Kilometer': 'km3',
    'Cubic Centimeter': 'cm3',
    Liter: 'liter',
    Milliliter: 'milliliter',
    Gallon: 'gal',
    Quart: 'qt',
    Pint: 'pt',
    Cup: 'cup',
    'Fluid Ounce': 'floz',
    'Table Spoon': 'tablespoon',
    'Tea Spoon': 'teaspoon',
    'Cubic Yard': 'cuyd',
    'Cubic Foot': 'cuft',
    'Cubic Inch': 'cuin',
  };

  const changeInput = (event) => {
    setCurrentInput(event.target.value);
  };

  const convertNumber = () => {
    if (!currentInput) {
      return '';
    }
    if (selectedType === 'Length') {
      try {
        const input = `${currentInput} ${lengthInput.toLowerCase()} to ${lenghOutput.toLowerCase()}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Time') {
      try {
        const input = `${currentInput} ${timeInput.toLowerCase()} to ${timeOutput.toLowerCase()}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Temperature') {
      try {
        const input = `${currentInput} ${temperatureInput.toLowerCase()} to ${temperatureOutput.toLowerCase()}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Area') {
      try {
        const input = `${currentInput} ${areaConversions[areaInput]} to ${areaConversions[areaOutput]}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Volume') {
      try {
        const input = `${currentInput} ${volumeConversions[volumeInput]} to ${volumeConversions[volumeOutput]}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Weight') {
      try {
        if (weightInput === 'Pound' && weightOutput === 'Pound') {
          return math.eval(`${currentInput} lb to lb`);
        }
        if (weightInput === 'Pound') {
          return math.eval(`${currentInput} lb to ${weightOutput.toLowerCase()}`);
        }
        if (weightOutput === 'Pound') {
          return math.eval(`${currentInput} ${weightInput.toLowerCase()} to lb`);
        }
        const input = `${currentInput} ${weightInput.toLowerCase()} to ${weightOutput.toLowerCase()}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else {
      return 'Error';
    }
  };

  return (
    <div>
      <Link className="link" to="/calculator">
        <RouteButton> Back </RouteButton>
      </Link>
      <div className="page">
        <div className="wrapper">
          <div className="header">Convert Units.</div>
          <div>
            <div className="row border-add">
              <TextField isOutput isTitle titleText="Input" />
            </div>
            <div className="row border-add">
              <TextField titleText={currentInput} evaluateValue={changeInput} />
            </div>
            <div className="row border-add margin-top-row">
              <TextField isOutput isTitle titleText="Output" />
            </div>
            <div className="row border-add">
              <TextField isOutput titleText={convertNumber()} />
            </div>
            <div className="row border-add margin-top-row">
              {categories.map((cat) => (
                <TabButton handleClick={() => setSelectedType(cat)} isSelected={selectedType === cat}>
                  {cat}
                </TabButton>
              ))}
            </div>
            <div className="row border-add">
              {selectedType === 'Length' ? (
                <div className="width-helper">
                  {lengthUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setLengthInput}
                      outputFunction={setLengthOutput}
                      selectedInput={lengthInput}
                      selectedOutput={lenghOutput}
                    />
                  ))}
                </div>
              ) : null}
              {selectedType === 'Time' ? (
                <div className="width-helper">
                  {timeUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setTimeInput}
                      outputFunction={setTimeOutput}
                      selectedInput={timeInput}
                      selectedOutput={timeOutput}
                    />
                  ))}
                </div>
              ) : null}
              {selectedType === 'Temperature' ? (
                <div className="width-helper">
                  {temperatureUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setTemperatureInput}
                      outputFunction={setTemperatureOutput}
                      selectedInput={temperatureInput}
                      selectedOutput={temperatureOutput}
                    />
                  ))}
                </div>
              ) : null}
              {selectedType === 'Area' ? (
                <div className="width-helper">
                  {areaUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setAreaInput}
                      outputFunction={setAreaOutput}
                      selectedInput={areaInput}
                      selectedOutput={areaOutput}
                    />
                  ))}
                </div>
              ) : null}
              {selectedType === 'Volume' ? (
                <div className="width-helper">
                  {volumeUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setVolumeInput}
                      outputFunction={setVolumeOutput}
                      selectedInput={volumeInput}
                      selectedOutput={volumeOutput}
                    />
                  ))}
                </div>
              ) : null}
              {selectedType === 'Weight' ? (
                <div className="width-helper">
                  {weightUnits.map((unit) => (
                    <SelectorRow
                      value={unit}
                      inputFunction={setWeightInput}
                      outputFunction={setWeightOutput}
                      selectedInput={weightInput}
                      selectedOutput={weightOutput}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="footer">Created in July 2020 by Jan Charatan.</div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
