import { Random } from '@woowacourse/mission-utils';

/**
 *
 * @param { number } min
 * @param { number } max
 * @param { number } length
 */

export const newLottoGenerator = (min, max, length) => {
  return Random.pickUniqueNumbersInRange(min, max, length);
};
