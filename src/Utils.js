import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumbers = (min, max, number) => {
  return Random.pickUniqueNumbersInRange(min, max, number);
};
