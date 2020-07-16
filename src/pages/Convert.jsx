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
        const input = `${currentInput} 
        ${areaInput.toLowerCase().replace(/\s/g, '')} to 
        ${areaOutput.toLowerCase().replace(/\s/g, '')}`;
        return math.eval(input);
      } catch (err) {
        return 'Error';
      }
    } else if (selectedType === 'Volume') {
      return 'Volume';
    } else if (selectedType === 'Weight') {
      return 'Weight';
    } else {
      return 'Error';
    }
  };

  return (
    <div>
      <Link className="link" to="/">
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
              <TabButton handleClick={() => setSelectedType('Length')} isSelected={selectedType === 'Length'}>
                Length
              </TabButton>
              <TabButton handleClick={() => setSelectedType('Time')} isSelected={selectedType === 'Time'}>
                Time
              </TabButton>
              <TabButton handleClick={() => setSelectedType('Temperature')} isSelected={selectedType === 'Temperature'}>
                Temperature
              </TabButton>
              <TabButton handleClick={() => setSelectedType('Area')} isSelected={selectedType === 'Area'}>
                Area
              </TabButton>
              <TabButton handleClick={() => setSelectedType('Volume')} isSelected={selectedType === 'Volume'}>
                Volume
              </TabButton>
              <TabButton handleClick={() => setSelectedType('Weight')} isSelected={selectedType === 'Weight'}>
                Weight
              </TabButton>
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
