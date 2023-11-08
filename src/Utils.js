import { LOTTO_RULE, WINNING_NUMBERS, WINNING_PROFITS } from './Constants.js';
import { Random, Console } from '@woowacourse/mission-utils';

class Utils {
  // 오름차순 정렬
  static sortLottoNumbers(arr) {
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }

  // 일정 범위 내 6개의 랜덤 번호 생성
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

  // 객체의 요소가 3보다 작다면 제거
  static removeLessThanThree(el) {
    const object = { ...el };
    for (const i in object) {
      if (typeof Number(i) === 'number' && i < 3) {
        delete object[i];
      }
    }
    return object;
  }
  // 객체의 요소가 3보다 작다면 제거
  static addMissingElement(el) {
    const object = { ...el };
    for (const i in WINNING_PROFITS) {
      const key = i.toString();
      if (!(key in object)) {
        object[key] = 0;
      }
    }
    return object;
  }

  // 문자열을 ,을 기준으로 나눈다.
  static splitComma(str) {
    return str.split(',');
  }
}
export default Utils;
