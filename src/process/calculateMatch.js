import updateTally from './updateTally.js';

function calculateMatch(tally, lottosList, winningNumbers, bonusNumber) {
  lottosList.forEach((item) => {
    let match = 0;
    let bonusMatch = 0;

    item.forEach((number) => (winningNumbers.includes(number) ? match++ : number));
    item.forEach((number) => (bonusNumber === number ? bonusMatch++ : number));

    updateTally(tally, match, bonusMatch);
  });

  return tally;
}

export default calculateMatch;
