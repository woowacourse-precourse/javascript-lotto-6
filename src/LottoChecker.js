import { MESSAGES } from "./Messages.js";

export function lottoChecker(randomNumbers, winningNumbers, bonusNumber) {
  const matchedCounts = [];

  for (let index = 0; index < randomNumbers.length; index += 1) {
    const count = randomNumbers[index].reduce((acc, number) => acc + (winningNumbers.includes(number)), 0);
    if (count === 5 && randomNumbers[index].includes(bonusNumber)) {
      matchedCounts[index] = MESSAGES.MATCH_BONUS;
    } else {
      matchedCounts[index] = count;
    }
  }
  return matchedCounts;
}