import { WINNIG_PROFITS, LOTTO_LENGTH } from "../Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Utils from "../Utils.js";

class GameUtils {
  constructor(lottos) {
    this.lottos = lottos;
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
      matchingCountsObj = Utils.addOrUpdatePropertyInObj(
        matchingCountsObj,
        matchingCount
      );
    }
    return matchingCountsObj;
  }

  
  processMatchingNumbersToResult(obj) {
    let result = { ...obj };
    result = Utils.removeItemsWithNumericKeysLessThanThree(result);
    result = Utils.addMissingElements(result);
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
