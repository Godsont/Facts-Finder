import React from 'react';

const Button = props => (
  <button className="btn-generic" onClick={props.getRandomFact}>{props.value}</button>
);

export default Button;
