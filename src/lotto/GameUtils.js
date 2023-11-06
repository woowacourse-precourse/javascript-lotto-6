import { WINNIG_PROFITS } from "../Constants.js";

class GameUtils {
  static splitComma(input) {
    return input.split(",");
  }
  static sortLottoNumbers(arr) {
    // 각 행을 오름차순으로 정렬
    arr.forEach((row) => row.sort((a, b) => a - b));
    return arr;
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
  static winningStatusForUser(matchingCount, winnigStatus) {
    const WINNIG_PROFIT = WINNIG_PROFITS[matchingCount].toLocaleString();
    if (matchingCount === "bonus") {
      return `5개 일치, 보너스 볼 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
    }
    return `${matchingCount}개 일치 (${WINNIG_PROFIT}원) - ${winnigStatus[matchingCount]}개`;
  }

  static processMatchingNumbersToResult(obj) {
    let result = { ...obj };
    result = this.removeItemsWithNumericKeysLessThanThree(result);
    result = this.addMissingElements(result);
    return result;
  }
}
export default GameUtils;
