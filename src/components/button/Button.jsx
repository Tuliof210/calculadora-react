/*
Dica: Tenha preferencia por criar components funcionais
funcionais => mais simples
de classe => mais complexos por terem estado, logo dificil de manter
Use components de classe apenas quando necessario trabalhar com estados
*/
import React from 'react';
// styles
import './Button.scss';

export default props => <button className="btn">{props['label']}</button>;
