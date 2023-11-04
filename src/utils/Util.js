import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/constant.js';

class Util {
  static createLottoNumber() {
    const lotto = Random.pickUniqueNumbersInRange(LOTTO.minRange, LOTTO.maxRange, LOTTO.length);
    return this.sortAscendingArray(lotto);
  }

  static sortAscendingArray(array) {
    return array.sort((a, b) => a - b);
  }

  static splitStringToNumberArray(string) {
    return string.split(',').map((value) => Number(value.trim()));
  }
}

export default Util;
