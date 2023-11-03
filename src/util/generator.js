import { Random } from '@woowacourse/mission-utils';

export const generator = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};
