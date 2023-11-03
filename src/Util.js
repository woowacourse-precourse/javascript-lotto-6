import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constant.js';

class Util {
  static createLottoNumber() {
    return Random.pickUniqueNumbersInRange(LOTTO.minRange, LOTTO.maxRange, LOTTO.numberCount);
  }
}

export default Util;
