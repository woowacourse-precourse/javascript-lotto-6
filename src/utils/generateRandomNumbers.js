import { Random } from '@woowacourse/mission-utils';

export default function generateRandomNumbersInRange() {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
}
