import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div style={{ backgroundColor: props.active ? props.activeColor : props.buttonColor }} className={"button" + (props.active ? " active" : "")} onClick={props.clickHandler}>
      {props.label}</div>
  );
}

Button.defaultProps = {
  activeColor: 'white'
}

export default Button;
