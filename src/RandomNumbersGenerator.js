import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './LottoInfo.js';

class LottoNumbersGenerator {
  generate() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.number.min,
      LOTTO.number.max,
      LOTTO.count,
    );
  }
}

export default LottoNumbersGenerator;
