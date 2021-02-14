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

// a função reset usa essa const como base
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const operate = ({ x, op, y, original }) => {
  switch (op) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      return x / y || original;
      break;
    default:
      return original;
  }
};

export default class Calculator extends Component {
  reset() {
    this.setState({ ...initialState });
  }
  setOperation(op) {
    if (this.state.current === 0)
      this.setState({ operation: op, current: 1, clearDisplay: true });
    else {
      const equals = op === '=';
      const currentOP = this.state['operation'];

      const values = [...this.state['values']];
      values[0] = operate({
        x: values[0],
        op: currentOP,
        y: values[1],
        original: values[0],
      });
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }
  addDigit(d) {
    //checa se o display ja inclui o '.'
    if (d === '.' && this.state['displayValue'].includes('.')) return;

    const clearDisplay =
      this.state['displayValue'] === '0' || this.state['clearDisplay'];
    const currentValue = clearDisplay ? '' : this.state['displayValue'];
    const displayValue = currentValue + d;

    this.setState({ displayValue, clearDisplay: false });

    const i = this.state['current'];
    const newValue = parseFloat(displayValue);
    const values = [...this.state['values']];
    values[i] = newValue;
    this.setState({ values });
  }

  state = { ...initialState };

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
        <Display value={this.state['displayValue']} />
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
