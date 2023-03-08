import { submitScores } from './api';
import displayScores from './showScores';

const refreshButton = document.querySelector('.refresh-button');
const submitButton = document.querySelector('.submit-button');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');

// When press refreshBtn, make a request to get the data from the API
refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  displayScores();
});

const clearFields = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const newName = nameInput.value;
  const newScore = scoreInput.value;
  await submitScores(newName, newScore);
  clearFields();
  displayScores();
});
