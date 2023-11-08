import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/constant.js';

class MakeLottoNumber {
  createRandom() {
    return Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.COUNT).sort((a, b) => a - b);
  }
}

export default MakeLottoNumber;
