import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/constant.js';

class Util {
  static createSortedLottoNumber() {
    const lotto = Random.pickUniqueNumbersInRange(LOTTO.minRange, LOTTO.maxRange, LOTTO.length);
    const sortedLotto = Util.sortAscendingArray(lotto);

    return sortedLotto;
  }

  static sortAscendingArray(array) {
    return array.sort((a, b) => a - b);
  }

  static splitStringToNumberArray(string) {
    return string.split(',').map((value) => Number(value.trim()));
  }

  static parseWinLotto(string) {
    const array = Util.splitStringToNumberArray(string);
    const sortedArray = Util.sortAscendingArray(array);

    return sortedArray;
  }

  static arrayToStringArray(array) {
    return `[${array.join(', ')}]`;
  }
}

export default Util;
