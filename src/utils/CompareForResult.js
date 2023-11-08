function compareForResult(winningNumbers, bonus, lottos) {
  let winningList = [0, 0, 0, 0, 0];
  lottos.forEach((lotto) => {
    const count = countMatchingNumbers(lotto, winningNumbers);

    if (count === 3) {
      winningList[0]++;
      return;
    }

    if (count === 4) {
      winningList[1]++;
      return;
    }

    if (count === 5) {
      if (lotto.includes(bonus)) {
        winningList[3]++;
      } else {
        winningList[2]++;
      }
      return;
    }

    if (count === 6) {
      winningList[4]++;
    }
  });

  return winningList;
}

function countMatchingNumbers(lotto, winningNumbers) {
  let count = 0;

  for (let i = 0; i < winningNumbers.length; i++) {
    if (lotto.includes(winningNumbers[i])) {
      count++;
    }
  }

  return count;
}

export default compareForResult;
