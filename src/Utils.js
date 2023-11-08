import { LOTTO_RULE } from './Constants.js';
import { Random, Console } from '@woowacourse/mission-utils';

class Utils {
  // 오름차순 정렬
  static sortLottoNumbers(arr) {
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }

  // 일정 범위 내, 6개의 랜덤 번호 생성
  static generateRandomNumbers() {
    const RANDOM_NUMBERS = Random.pickUniqueNumbersInRange(
      LOTTO_RULE.RANGE.MIN,
      LOTTO_RULE.RANGE.MAX,
      LOTTO_RULE.LENGTH,
    );
    return RANDOM_NUMBERS;
  }

  // 요소가 있다면 값에 1을 더하고, 없다면 새로운 속성을 추가한다.
  static addOrCreateProperty(object, el) {
    let newObject = { ...object };
    if (!object[el]) {
      newObject[el] = 1;
      return newObject;
    }
    newObject[el] += 1;
    return newObject;
  }
}
export default Utils;
