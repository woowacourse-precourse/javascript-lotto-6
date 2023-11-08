import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_LENGTH, WINNIG_PROFITS } from './constants/Constants';

class Utils {
  static splitByComma(str) {
    return str.split(',');
  }

  static sortLottoNumbers(arr) {
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }

  static generateRandomNumbers() {
    const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      LOTTO_LENGTH,
    );
    return RANDOM_NUMBERS;
  }

  static addOrUpdateProperty(obj, key) {
    const newObj = { ...obj };
    if (!obj[key]) {
      newObj[key] = 1;
      return newObj;
    }
    newObj[key] += 1;
    return newObj;
  }

  static removeLessNumberThree(obj) {
    const OBJ = { ...obj };
    for (const KEY in OBJ) {
      if (typeof Number(KEY) === 'number' && KEY < 3) {
        delete OBJ[KEY];
      }
    }
    return OBJ;
  }

  // WINNING_PROFITS의 key가 obj에 없다면 value가 0인 프로퍼티로 생성
  static addMissingNumber(obj) {
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
