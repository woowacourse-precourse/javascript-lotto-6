import { Random } from '@woowacourse/mission-utils';

export default function generateUniqueNumbers(min, max, count) {
  return Random.pickUniqueNumbersInRange(min, max, count);
}
