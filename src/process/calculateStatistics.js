import calculateMatch from './calculateMatch.js';

function calculateStatistics(lottosList, winningNumbers, bonusNumber) {
  const tally = {
    match3: 0,
    match4: 0,
    match5: 0,
    match5PlusBonus: 0,
    match6: 0,
  };

  calculateMatch(tally, lottosList, winningNumbers, bonusNumber);

  return tally;
}

export default calculateStatistics;
