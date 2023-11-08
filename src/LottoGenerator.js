import { Random } from '@woowacourse/mission-utils';
import { condition } from './consts.js';

class LottoGenerator {
  generateLotto() {
    return Random.pickUniqueNumbersInRange(
      condition.lottoMinNumber,
      condition.lottoMaxNumber,
      condition.lottoNumbersLength,
    );
  }
}

export default LottoGenerator;
