import React, { useState } from 'react';


const PlayerForm = ({ addNewPlayer }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  

  const Submit = () => {
    
    Submit({ addNewPlayer });
    setName('');
    setBreed('');
  };

  return (
    <div id='new-player-form'>
      <form onSubmit={Submit}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor='breed'>Breed: </label>
        <input type='text' name='breed' value={breed} onChange={(event) => setBreed(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default PlayerForm;
