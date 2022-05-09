import React from 'react';
import './Score.css';

const Score = (props) => {

  return (
    <div id="score-container">Score: {props.score}</div>
  );
}

export default Score;
