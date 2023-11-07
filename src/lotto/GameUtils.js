import { WINNIG_PROFITS, LOTTO_LENGTH } from "../Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGame from "./LottoGame.js";
class GameUtils {
  constructor(lottos) {
    this.lottos = lottos;
  }
  generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_LENGTH);
  }

  matchingCountsWithArr(winningNumbers) {
    const MATCHING_COUNTS = [];
    for (let index = 0; index < this.lottos.length; index++) {
      MATCHING_COUNTS.push(this.lottos[index].getMatchingCount(winningNumbers));
    }
    return MATCHING_COUNTS;
  }

  matchingCountsWithObj(matchingCountsArr, bonusNumber) {
    let matchingCountsObj = {};
    for (let index = 0; index < matchingCountsArr.length; index++) {
      let matchingCount = matchingCountsArr[index];
      if (matchingCount === 5) {
        const BONUS_LOTTO = this.lottos[index].getNumbers();
        matchingCount = this.checkBonusNumberMatch(BONUS_LOTTO, bonusNumber);
      }
      matchingCountsObj = this.addOrUpdatePropertyInObj(
        matchingCountsObj,
        matchingCount
      );
    }
    return matchingCountsObj;
  }

  addOrUpdatePropertyInObj(obj, matchingCount) {
    let newObj = { ...obj };
    if (!obj[matchingCount]) {
      newObj[matchingCount] = 1;
      return newObj;
    }
    newObj[matchingCount] += 1;
    return newObj;
  }

  removeItemsWithNumericKeysLessThanThree(obj) {
    const OBJ = { ...obj };
    for (const KEY in OBJ) {
      if (typeof Number(KEY) === "number" && KEY < 3) {
        delete OBJ[KEY];
      }
    }
    return OBJ;
  }
  addMissingElements(obj) {
    const OBJ = { ...obj };
    for (const WINNING_NUMBER in WINNIG_PROFITS) {
      const key = WINNING_NUMBER.toString();
      if (!(key in OBJ)) {
        OBJ[key] = 0;
      }
    }
    return OBJ;
  }

  processMatchingNumbersToResult(obj) {
    let result = { ...obj };
    result = this.removeItemsWithNumericKeysLessThanThree(result);
    result = this.addMissingElements(result);
    return result;
  }

  checkBonusNumberMatch(bonusLotto, bonusNumber) {
    if (bonusLotto.includes(Number(bonusNumber))) {
      return "bonus";
    }
    return "5";
  }
}
export default GameUtils;
