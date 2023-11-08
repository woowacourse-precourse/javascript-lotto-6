import { Random } from '@woowacourse/mission-utils';

export default function createLottoNumbers() {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
}
