/*
Dica: Tenha preferencia por criar components funcionais
funcionais => mais simples
de classe => mais complexos por terem estado, logo dificil de manter
Use components de classe apenas quando necessario trabalhar com estados
*/
import React from 'react';
// styles
import './Button.scss';

export default props => {
  const classes = [
    'btn',
    `${props['double'] ? 'double' : ''}`,
    `${props['triple'] ? 'triple' : ''}`,
    `${props['operator'] ? 'operator' : ''}`,
  ];
  return <button className={classes.join(' ')}>{props['label']}</button>;
};
