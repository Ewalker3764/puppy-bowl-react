const cohortName = '2303-ftb-et-web-ft';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const {
      success,
      error,
      data: { players },
    } = await response.json();
    if (error) throw error;
    return players;
  } catch (error) {
    console.error('Oh no! There was an error in fetchAllPlayers!', error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const {
      success,
      error,
      data: { player },
    } = await response.json();
    return player;
  } catch (error) {
    console.error('Oh no! There was an error in fetchSinglePlayer!', error);
  }
};

export const addNewPlayer = async ({ name, breed }) => {
  try {
    const response = await fetch(`${APIURL}/players/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, breed }),
    });
    const {
      success,
      error,
      data: { newPlayer },
    } = await response.json();
    return newPlayer;
  } catch (error) {
    console.error('Oh no! There was an error in addNewPlayer!', error);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: 'DELETE',
    });
    const { success, error, data } = await response.json();
    if (error) throw error;
    return;
  } catch (error) {
    console.error('Oh no! There was an error in removePlayer!', error);
  }
};
