
export function lottoChecker(randomNumbers, winningNumbers, bonusNumber) {
  const matchedCounts = [];
  let matchedBonusPosition = -1;
  for (let index = 0; index < randomNumbers.length; index += 1) {
    matchedCounts.push(randomNumbers[index].reduce((acc, number) => acc + (winningNumbers.includes(number)), 0));
    if (randomNumbers[index].includes(bonusNumber)) {
      matchedBonusPosition = index;
    }
  }

  return { matchedCounts, matchedBonusPosition };
}