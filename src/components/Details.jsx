import React, { useState } from 'react';


const PlayerDetail = ({ id, breed, status }) => (
  <div>
    <p>ID: {id}</p>
    <p>Breed: {breed}</p>
    <p>Status: {status}</p>
  </div>
);


  const [showDetails, setShowDetails] = useState('');

  const DetailsClick = () => {
    setShowDetails(!showDetails);
  

  return (
    <div className='player-card'>
      <button onClick={DetailsClick}>Details</button>
      {showDetails && <PlayerDetail id={id} breed={breed} status={status} />}
    </div>
  );
};
export default Details;