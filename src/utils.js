import { Random } from '@woowacourse/mission-utils';
import { LOTTO, MATCH, UTILITY } from './data.js';

function isPositiveInteger(value) {
  const number = Number(value);

  return Number.isInteger(number) && number > UTILITY.ZERO;
}

function generateRandomNumbers(count) {
  return Random.pickUniqueNumbersInRange(
    LOTTO.MIN_NUMBER,
    LOTTO.MAX_NUMBER,
    count
  ).sort((a, b) => a - b);
}

function getMatchCount(lottoNumbers, winningNumbers, bonus) {
  let match = MATCH.INITIAL_COUNT;

  lottoNumbers.forEach((number) => {
    if (winningNumbers.includes(number)) {
      match += MATCH.UNIT;
    }

    if (match === MATCH.FIVE && lottoNumbers.includes(bonus)) {
      return MATCH.SECOND_REWARD_CONDITION;
    }
  });

  return match;
}

export { isPositiveInteger, generateRandomNumbers, getMatchCount };
