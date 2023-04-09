import React from 'react';

const SinglePlayer = ({ selectedPlayer }) => {
  
  return (
    <div className="single-player-card">
      <img src={selectedPlayer.imageUrl} alt={selectedPlayer.name} />
      <h2>{selectedPlayer.name}</h2>
      <p>Breed: {selectedPlayer.breed}</p>
      <p>Status: {selectedPlayer.status}</p>
      <p>ID: {selectedPlayer.id}</p>
    </div>
  );
};

export default SinglePlayer;


