import React from 'react';
import './Calculator.css';
import { Button } from '../components/Button';
import { ClearButton } from '../components/ClearButton';
import { Input } from '../components/Input';
import { evaluate } from 'mathjs';

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.downHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.downHandler);
  }

  addToInput = (val) => {
    if (this.state.input === "Error" || !this.state.input) {
      this.setState ({
        input: val
      })
    } else {
    this.setState({
      input: this.state.input + val,
    });
  }
  }

  downHandler = (e) => {
    if (e.key === "Enter" || e.key === "=") {
      this.handleEqual();
    } 
    if (e.key === "Backspace") {
      if(this.state.input === "Error") {
        this.setState({
          input: ""
        })
      }
      this.removeChar();
    }
    if (e.key === "c" || e.key === "C") {
      this.setState({
        input: ""
      })
    }
    const chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "."];
    if (chars.includes(e.key)) {
      this.addToInput(e.key);
    } 
  }

  handleEqual = () => {
    try {
      this.setState({
        input: evaluate(this.state.input)
      });
    } catch (error) {
      this.setState({
        input: "Error",
      });
    }   
  }

  removeChar() {
    try {
      this.setState({
        input: this.state.input.slice(0, -1)
    })} catch (error) {
      this.setState({
        input: "",
      });
    }}
  
  render() {
    return (
      <div className="calculator">
        <div className="calc-wrapper">
          <div className="calc-header">
            Jan's Calculator
          </div>
          <div className="row">
            <Input input={this.state.input}></Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input:""})}>Clear</ClearButton>
          </div>
          <div className="calc-footer">
            Created in July 2020 by Jan Charatan.
          </div>
        </div>
      </div>
    );
  } 
}
