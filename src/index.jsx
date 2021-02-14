import React from 'react';
import ReactDOM from 'react-dom';
// my components
import Calculator from './app/Calculator';
//styles
import './index.scss';

ReactDOM.render(
  <div>
    <h1 className="header">Calculadora</h1>
    <Calculator />
  </div>,
  document.getElementById('root')
);
