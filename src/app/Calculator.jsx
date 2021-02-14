import React, { Fragment, Component } from 'react';
// my components
import Button from '../components/button/Button';
import Display from '../components/display/Display';
// styles
import './Calculator.scss';

const btnList = [
  { label: 'AC' },
  { label: '/' },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '*' },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '-' },
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '+' },
  { label: '0' },
  { label: '.' },
  { label: '=' },
];

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <Display value={200} />
        {btnList.map(btn => (
          <Button label={btn.label} />
        ))}
      </div>
    );
  }
}
