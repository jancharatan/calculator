import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RouteButton from '../components/RouteButton';
import './Pages.css';
import TextField from '../components/TextField';
import TabButton from '../components/TabButton';
import SelectorRow from '../components/SelectorRow';

const Convert = () => {
  const [selectedType, setSelectedType] = useState('Length');
  const [selectedLengthInput, setSelectedLengthInput] = useState('Meter');
  const [selectedLengthOutput, setSelectedLengthOutput] = useState('Meter');
  const [selectedTimeInput, setSelectedTimeInput] = useState('Second');
  const [selectedTimeOutput, setSelectedTimeOutput] = useState('Second');
  const [selectedTemperatureInput, setSelectedTemperatureInput] = useState('Celcius');
  const [selectedTemperatureOutput, setSelectedTemperatureOutput] = useState('Celcius');
  const [selectedAreaInput, setSelectedAreaInput] = useState('Square Meter');
  const [selectedAreaOutput, setSelectedAreaOutput] = useState('Square Meter');
  const [selectedVolumeInput, setSelectedVolumeInput] = useState('Cubic Meter');
  const [selectedVolumeOutput, setSelectedVolumeOutput] = useState('Cubic Meter');
  const [selectedWeightInput, setSelectedWeightInput] = useState('Kilogram');
  const [selectedWeightOutput, setSelectedWeightOutput] = useState('Kilogram');

  return (
    <div>
      <Link className="link" to="/">
        <RouteButton> Back </RouteButton>
      </Link>
      <div className="page">
        <div className="wrapper">
          <div className="header">
            Convert Units.
          </div>
          <div>
            <div className="row border-add">
              <TextField isOutput isTitle titleText="Input" />
            </div>
            <div className="row border-add">
              <TextField />
            </div>
            <div className="row border-add margin-top-row">
              <TextField isOutput isTitle titleText="Output" />
            </div>
            <div className="row border-add">
              <TextField isOutput />
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
                  <SelectorRow value="Meter" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Kilometer" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Centimeter" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Millimeter" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Micrometer" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Nanometer" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Mile" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Yard" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Foot" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Inch" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                  <SelectorRow value="Light Year" inputFunction={setSelectedLengthInput} outputFunction={setSelectedLengthOutput} selectedInput={selectedLengthInput} selectedOutput={selectedLengthOutput} />
                </div>
              ) : null}
              {selectedType === 'Time' ? (
                <div className="width-helper">
                  <SelectorRow value="Second" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Millisecond" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Microsecond" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Nanosecond" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Picosecond" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Minute" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Hour" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Day" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Week" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Month" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                  <SelectorRow value="Year" inputFunction={setSelectedTimeInput} outputFunction={setSelectedTimeOutput} selectedInput={selectedTimeInput} selectedOutput={selectedTimeOutput} />
                </div>
              ) : null}
              {selectedType === 'Temperature' ? (
                <div className="width-helper">
                  <SelectorRow value="Celcius" inputFunction={setSelectedTemperatureInput} outputFunction={setSelectedTemperatureOutput} selectedInput={selectedTemperatureInput} selectedOutput={selectedTemperatureOutput} />
                  <SelectorRow value="Kelvin" inputFunction={setSelectedTemperatureInput} outputFunction={setSelectedTemperatureOutput} selectedInput={selectedTemperatureInput} selectedOutput={selectedTemperatureOutput} />
                  <SelectorRow value="Fahrenheit" inputFunction={setSelectedTemperatureInput} outputFunction={setSelectedTemperatureOutput} selectedInput={selectedTemperatureInput} selectedOutput={selectedTemperatureOutput} />
                </div>
              ) : null}
              {selectedType === 'Area' ? (
                <div className="width-helper">
                  <SelectorRow value="Square Meter" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Kilometer" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Centimeter" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Millimeter" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Micrometer" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Hectare" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Mile" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Yard" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Foot" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Square Inch" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                  <SelectorRow value="Acre" inputFunction={setSelectedAreaInput} outputFunction={setSelectedAreaOutput} selectedInput={selectedAreaInput} selectedOutput={selectedAreaOutput} />
                </div>
              ) : null}
              {selectedType === 'Volume' ? (
                <div className="width-helper">
                  <SelectorRow value="Cubic Meter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Kilometer" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Centimeter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Millimeter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Liter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Liter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Milliliter" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Gallon" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Quart" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Pint" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Cup" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Fluid Ounce" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="US Table Spoon" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Imperial Gallon" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Imperial Quart" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Imperial Pint" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Imperial Fluid Ounce" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Imperial Table Spoon" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Mile" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Yard" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Foot" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                  <SelectorRow value="Cubic Inch" inputFunction={setSelectedVolumeInput} outputFunction={setSelectedVolumeOutput} selectedInput={selectedVolumeInput} selectedOutput={selectedVolumeOutput} />
                </div>
              ) : null}
              {selectedType === 'Weight' ? (
                <div className="width-helper">
                  <SelectorRow value="Kilogram" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Gram" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Milligram" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Metric Ton" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Long Ton" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Short Ton" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Pound" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Ounce" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Carrat" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                  <SelectorRow value="Atomic Mass Unit" inputFunction={setSelectedWeightInput} outputFunction={setSelectedWeightOutput} selectedInput={selectedWeightInput} selectedOutput={selectedWeightOutput} />
                </div>
              ) : null}
            </div>
          </div>
          <div className="footer">
            Created in July 2020 by Jan Charatan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
