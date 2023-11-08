import Utils from '../Utils';

class GameUtils {
  constructor(lottos) {
    this.lottos = lottos;
  }

  matchingCountsWithArray(winningNumbers) {
    const MATCHING_COUNTS = [];
    for (let index = 0; index < this.lottos.length; index += 1) {
      MATCHING_COUNTS.push(this.lottos[index].getMatchingCount(winningNumbers));
    }
    return MATCHING_COUNTS;
  }

  matchingCount(matchingCountsArr, bonusNumber) {
    let matchingCountsObj = {};
    for (let index = 0; index < matchingCountsArr.length; index += 1) {
      let matchingCount = matchingCountsArr[index];
      if (matchingCount === 5) {
        const BONUS_LOTTO = this.lottos[index].getNumbers();
        matchingCount = this.getSameBonusNumber(BONUS_LOTTO, bonusNumber);
      }
      matchingCountsObj = Utils.addOrUpdateProperty(
        matchingCountsObj,
        matchingCount,
      );
    }
    return matchingCountsObj;
  }

  getSameBonusNumber(bonusLotto, bonusNumber) {
    if (bonusLotto.includes(Number(bonusNumber))) {
      return 'bonus';
    }
    return '5';
  }

  sameNumberToResult(obj) {
    let result = { ...obj };
    result = Utils.removeLessNumberThree(result);
    result = Utils.addMissingNumber(result);
    return result;
  }
}

export default GameUtils;
