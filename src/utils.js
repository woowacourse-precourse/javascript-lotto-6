import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './data.js';

function isPositiveInteger(value) {
  const number = Number(value);

  return Number.isInteger(number) && number > 0;
}

function generateRandomNumbers(count) {
  return Random.pickUniqueNumbersInRange(
    LOTTO.MIN_NUMBER,
    LOTTO.MAX_NUMBER,
    count
  ).sort((a, b) => a - b);
}

function getMatchCount(lotto, winningNumbers, bonus) {
  let match = 0;
  const lottoNumbers = lotto.getLottoNumbers();

  for (const number of lottoNumbers) {
    if (winningNumbers.includes(number)) {
      match += 1;
    }

    if (match === 5 && lottoNumbers.includes(bonus)) {
      return '5 + 1';
    }
  }

  return match;
}

export { isPositiveInteger, generateRandomNumbers, getMatchCount };
