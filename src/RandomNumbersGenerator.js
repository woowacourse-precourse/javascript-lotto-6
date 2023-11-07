import { Random } from '@woowacourse/mission-utils';
import { LOTTO, LOTTO_NUMBER } from './LottoInfo.js';

class LottoNumbersGenerator {
  generate() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.min,
      LOTTO_NUMBER.max,
      LOTTO.count,
    );
  }
}

export default LottoNumbersGenerator;
