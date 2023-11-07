import { Random } from '@woowacourse/mission-utils';
import LOTTO from '../constants/lotto';

export default function generateLottoNumbers() {
  return Random.pickUniqueNumbersInRange(LOTTO.min, LOTTO.max, LOTTO.length);
}
