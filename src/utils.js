import { Random } from '@woowacourse/mission-utils';

function isPositiveInteger(value) {
  const number = Number(value);

  return Number.isInteger(number) && number > 0;
}

function generateRandomNumbers(count) {
  return Random.pickUniqueNumbersInRange(1, 45, count).sort((a, b) => a - b);
}

export { isPositiveInteger, generateRandomNumbers };
