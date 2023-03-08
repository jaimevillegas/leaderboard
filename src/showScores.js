import { retreiveData } from './api.js';

const leaderboard = document.querySelector('.leaderboard');
const displayScores = async () => {
  leaderboard.innerHTML = ' ';
  const scores = await retreiveData();
  const scoresObj = scores.result;
  scoresObj.forEach((score) => {
    const scoreContainer = document.createElement('li');
    scoreContainer.classList.add('score-container');
    scoreContainer.innerHTML = `${score.user}: ${score.score}`;
    leaderboard.appendChild(scoreContainer);
  });
};

export default displayScores;
