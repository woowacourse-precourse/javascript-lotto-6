import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../utils/constants.js';
class LottoGenerator {
  static generator() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.COUNT
    );
    return numbers;
  }
}

export default LottoGenerator;
