import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumbers = (min, max, size) => {
  const number = Random.pickUniqueNumbersInRange(min, max, size);

  return number;
};
