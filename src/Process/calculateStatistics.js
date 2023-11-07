function calculateStatistics(lottosList, winningNumbers, bonusNumber) {
  const tally = {
    match3: 0,
    match4: 0,
    match5: 0,
    match5PlusBonus: 0,
    match6: 0,
  };

  lottosList.forEach((item) => {
    let match = 0;
    let bonusMatch = 0;

    item.forEach((number) => (winningNumbers.includes(number) ? match++ : number));
    item.forEach((number) => (bonusNumber === number ? bonusMatch++ : number));

    if (match === 6) {
      tally.match6 += 1;
    } else if (match === 5 && bonusMatch === 1) {
      tally.match5PlusBonus += 1;
    } else if (match === 5) {
      tally.match5 += 1;
    } else if (match === 4) {
      tally.match4 += 1;
    } else if (match === 3) {
      tally.match3 += 1;
    }
  });

  return tally;
}

export default calculateStatistics;
