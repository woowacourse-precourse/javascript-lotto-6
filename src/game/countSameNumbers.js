function countSameNumbers(lotteries, winningNumbers) {
  const SAME_COUNT = [];
  for (let i = 0; i < lotteries.length; i += 1) {
    let count = 0;
    for (let j = 0; j < winningNumbers.length; j += 1) {
      if (lotteries[i].includes(winningNumbers[j])) count += 1;
    }
    if (count === 6 && !lotteries[i].includes(winningNumbers[6])) {
      count += 1;
    }
    SAME_COUNT.push(count);
  }

  return SAME_COUNT;
}

export default countSameNumbers;
