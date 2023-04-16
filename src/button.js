import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick} className="cta-button">
      {props.label}
    </button>
  );
}

export default Button;
