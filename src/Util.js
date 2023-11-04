import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from './constant.js';

class Util {
  static createLottoNumber() {
    const lotto = Random.pickUniqueNumbersInRange(LOTTO.minRange, LOTTO.maxRange, LOTTO.numberCount);
    return this.sortAscendingArray(lotto);
  }

  static sortAscendingArray(array) {
    return array.sort((a, b) => a - b);
  }
}

export default Util;
