import React, { Fragment, Component } from 'react';
// my components
import Button from '../components/button/Button';
import Display from '../components/display/Display';
// styles
import './Calculator.scss';

const btnList = [
  { label: 'AC', action: 'reset', triple: true },
  { label: '/', action: 'setOperation', operator: true },
  { label: 7, action: 'addDigit' },
  { label: 8, action: 'addDigit' },
  { label: 9, action: 'addDigit' },
  { label: '*', action: 'setOperation', operator: true },
  { label: 4, action: 'addDigit' },
  { label: 5, action: 'addDigit' },
  { label: 6, action: 'addDigit' },
  { label: '-', action: 'setOperation', operator: true },
  { label: 1, action: 'addDigit' },
  { label: 2, action: 'addDigit' },
  { label: 3, action: 'addDigit' },
  { label: '+', action: 'setOperation', operator: true },
  { label: 0, action: 'addDigit', double: true },
  { label: '.', action: 'addDigit' },
  { label: '=', action: 'setOperation', operator: true },
];

export default class Calculator extends Component {
  reset() {
    console.log('memory clear');
  }
  setOperation(op) {
    console.log('setting operation:', op);
  }
  addDigit(d) {
    console.log('adding digit:', d);
  }

  constructor(props) {
    super(props);
    // configura as funções para usarem this = atual instancia
    this.reset = this.reset.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  render() {
    return (
      <div className="calculator-wrapper">
        <Display value={200} />
        {btnList.map((btn, index) => (
          <Button
            key={index}
            label={btn['label']}
            double={btn['double']}
            triple={btn['triple']}
            operator={btn['operator']}
            click={this[btn.action]}
          />
        ))}
      </div>
    );
  }
}
