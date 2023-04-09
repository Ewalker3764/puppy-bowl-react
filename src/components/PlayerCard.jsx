import React from 'react';

const PlayerCard = ({ players, selectPlayer }) => {
  return (
    <div className="player-card-container">
      {players.map((player) => (
        <div className="single-player-card" key={player.id}>
          <img src={player.imageUrl} alt={selectPlayer.name} />
          <div className="player-info">
            <h3>{player.name}</h3>
            <button onClick={() => selectPlayer(player.id)}>Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;