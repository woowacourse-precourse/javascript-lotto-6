import { LOTTO_LENGTH, WINNIG_PROFITS } from './Constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Utils {
  // 문자열을 ,를 기준으로 나누어 배열로 만듬
  static splitComma(str) {
    return str.split(',');
  }

  // 2차원 배열안의 각 배열요소들을 오름차순으로 정렬
  static sortLottoNumbers(arr) {
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }

  // 1~45의 6개의 랜덤 번호 생성
  static generateRandomNumbers() {
    const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      LOTTO_LENGTH
    );
    return RANDOM_NUMBERS;
  }

  // key가 있다면 그 key값의 value에 1을 더하고, 그렇지 않다면 그 key값의 value는 1인 새로운 속성 생성
  static addOrUpdatePropertyInObj(obj, key) {
    let newObj = { ...obj };
    if (!obj[key]) {
      newObj[key] = 1;
      return newObj;
    }
    newObj[key] += 1;
    return newObj;
  }

  // obj의 key가 3보다 작다면 제거
  static removeItemsWithNumericKeysLessThanThree(obj) {
    const OBJ = { ...obj };
    for (const KEY in OBJ) {
      if (typeof Number(KEY) === 'number' && KEY < 3) {
        delete OBJ[KEY];
      }
    }
    return OBJ;
  }
  
  // WINNING_PROFITS의 key가 obj에 없다면 value가 0인 프로퍼티로 생성
  static addMissingElements(obj) {
    const OBJ = { ...obj };
    for (const WINNING_NUMBER in WINNIG_PROFITS) {
      const key = WINNING_NUMBER.toString();
      if (!(key in OBJ)) {
        OBJ[key] = 0;
      }
    }
    return OBJ;
  }
}
export default Utils;
