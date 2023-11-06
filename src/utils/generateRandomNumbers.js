import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumbers = (min, max, size) => {
  let array = [];
  let set = new Set();
  while (set.size !== size) {
    const number = Random.pickNumberInRange(min, max);
    array.push(number);
    set = new Set([...array]);
    array = Array.from(set);
  }

  return array;
};
