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

  static parseStringToSortedArray(string) {
    const array = Util.splitStringToNumberArray(string);
    const sortedArray = Util.sortAscendingArray(array);

    return sortedArray;
  }

  static arrayToStringArray(array) {
    return `[${array.join(', ')}]`;
  }

  static rateOfReturn(total, budget) {
    return ((total / budget) * 100).toFixed(1);
  }

  static numberToKoreanWon(number) {
    return `${number.toLocaleString('ko-KR')}원`;
  }
}

export default Util;
