import React, { Fragment, Component } from 'react';
// my components
import Button from '../components/button/Button';
import Display from '../components/display/Display';
// styles
import './Calculator.scss';

const btnList = [
  { label: 'AC', triple: true },
  { label: '/', operator: true },
  { label: '7' },
  { label: '8' },
  { label: '9' },
  { label: '*', operator: true },
  { label: '4' },
  { label: '5' },
  { label: '6' },
  { label: '-', operator: true },
  { label: '1' },
  { label: '2' },
  { label: '3' },
  { label: '+', operator: true },
  { label: '0', double: true },
  { label: '.' },
  { label: '=', operator: true },
];

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <Display value={200} />
        {btnList.map(btn => (
          <Button
            label={btn['label']}
            double={btn['double']}
            triple={btn['triple']}
            operator={btn['operator']}
          />
        ))}
      </div>
    );
  }
}
