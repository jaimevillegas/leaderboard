const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = '8hN6PIyTxPuUmugLVKvR';

// Retrieve data from the API
const retreiveData = async () => {
  const response = await fetch(`${url}games/${gameID}/scores`);
  const data = await response.json();
  return data;
};

// When form is completed, sends the inputs to the API
const submitScores = async (user, score) => {
  const response = await fetch(`${url}games/${gameID}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

export {
  retreiveData,
  submitScores,
};
