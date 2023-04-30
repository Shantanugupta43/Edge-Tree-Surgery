import React from 'react';

/*The code is used to create buttons in webpages required
Button is imported each time a webpage requires it.
*/

function Button(props) {
  return (
    <button onClick={props.onClick} className="cta-button">
      {props.label}
    </button>
  );
}

export default Button;
