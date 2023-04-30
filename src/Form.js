import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');    // useStates added to change the state between name and setName for event to target
  const [email, setEmail] = useState('');   
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hi ${name}, Form has been submitted! You will get a response soon in few days on ${email}`);  //alert added when form submit is clicked
  };

  return (
    <form onSubmit={handleSubmit}>  {/* Calls handleSubmit function */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}   
        className="input-field"
      />    {/* Input form created and setName targetted which takes the value "name" */}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}   
        className="input-field"
      />   {/* Input form created and setEmail targetted which takes the value "email" */}

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="input-field"
      />   {/* Input form created and setDescription targetted which takes the value "description" */}

      <button type="submit" className="cta-button">Submit</button>   {/* Submit button in form element */}
    </form>
  );
}

export default Form;
