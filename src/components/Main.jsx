import React, { useState, useEffect } from 'react';
import PlayerForm from './PlayerForm';
import SinglePlayer from './Singleplayer';
import PlayerCard from './PlayerCard';
import { fetchAllPlayers, fetchSinglePlayer, addNewPlayer } from '../API/ajaxHelpers';


const Main = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [search, setSearch] = useState('');
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
      setAllPlayers(players); 
    };
    getPlayers();
  }, []);

  const formSubmit = async (player) => {
    const newPlayer = await addNewPlayer(player);
    setPlayers([players, newPlayer]);
  };

  const selectPlayer = async (playerId) => {
    const player = await fetchSinglePlayer(playerId);
    setSelectedPlayer(player);
  };

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    const filteredPlayers = allPlayers.filter((player) =>
      player.name.toLowerCase().includes(search.toLowerCase())
    );
    setPlayers(filteredPlayers);
    
  };

  const clearSearch = () => {
    setSearch('');
    setPlayers(allPlayers); 
  }

  return (
    <div id="Main">
      <div id="nav-bar">
        <h1 className="pupper">Puppy Bowl</h1>
        <PlayerForm onSubmit={formSubmit} />
        <form onSubmit={searchSubmit}>
          <input type="text" name="search" placeholder="Search players" value={search} onChange={searchChange} />
          <button type="submit">Search</button>
          {search.length > 0 && <button onClick={clearSearch}>Clear</button>}
        </form>
        <PlayerCard players={players} selectPlayer={selectPlayer} />
        <div id="single-player-container">
          {selectedPlayer.id && <SinglePlayer selectedPlayer={selectedPlayer} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
