import { Random } from '@woowacourse/mission-utils';

function makeRandomNumber(start, end, size) {
  return Random.pickUniqueNumbersInRange(start, end, size);
}

export function getRandomNumberSort(start, end, size) {
  return makeRandomNumber(start, end, size).sort((a, b) => a - b);
}
