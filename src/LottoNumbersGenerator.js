import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constant/LottoInfo.js';

class LottoNumbersGenerator {
  static generate() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.number.min,
      LOTTO.number.max,
      LOTTO.count,
    );
  }
}

export default LottoNumbersGenerator;
