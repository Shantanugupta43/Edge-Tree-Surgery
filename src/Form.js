import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hi ${name}, Form has been submitted! You will get a response soon in few days on ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="input-field"
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="input-field"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="input-field"
      />

      <button type="submit" className="cta-button">Submit</button>
    </form>
  );
}

export default Form;
