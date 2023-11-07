import { LOTTO_LENGTH, WINNIG_PROFITS } from "./Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Utils {
  static splitComma(input) {
    if (typeof input !== "string") {
      throw new Error("Input must be a string.");
    }
    return input.split(",");
  }

  static sortLottoNumbers(arr) {
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
  }

  static generateRandomNumbers() {
    const RANDOM_NUMBERS =  MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_LENGTH);
    return RANDOM_NUMBERS;
  }

  static addOrUpdatePropertyInObj(obj, matchingCount) {
    let newObj = { ...obj };
    if (!obj[matchingCount]) {
      newObj[matchingCount] = 1;
      return newObj;
    }
    newObj[matchingCount] += 1;
    return newObj;
  }

  static removeItemsWithNumericKeysLessThanThree(obj) {
    const OBJ = { ...obj };
    for (const KEY in OBJ) {
      if (typeof Number(KEY) === "number" && KEY < 3) {
        delete OBJ[KEY];
      }
    }
    return OBJ;
  }
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