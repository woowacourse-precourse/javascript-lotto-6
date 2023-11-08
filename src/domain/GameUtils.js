import Utils from '../Utils.js';

class GameUtils {
  constructor(lottos) {
    this.lottos = lottos;
  }

  // 당첨 번호를 기반으로 각 로또의 일치하는 숫자 수를 배열로 반환
  matchingCountsWithArr(winningNumbers) {
    const MATCHING_COUNTS = [];
    for (let index = 0; index < this.lottos.length; index++) {
      MATCHING_COUNTS.push(this.lottos[index].getMatchingCount(winningNumbers));
    }
    return MATCHING_COUNTS;
  }

  // 일치하는 숫자 배열과 보너스 번호를 기반으로 일치하는 숫자의 개수를 객체로 반환
  matchingCountsWithObj(matchingCountsArr, bonusNumber) {
    let matchingCountsObj = {};
    for (let index = 0; index < matchingCountsArr.length; index++) {
      let matchingCount = matchingCountsArr[index];
      if (matchingCount === 5) {
        const BONUS_LOTTO = this.lottos[index].getNumbers();
        matchingCount = this.checkBonusNumberMatch(BONUS_LOTTO, bonusNumber);
      }
      matchingCountsObj = Utils.addOrUpdatePropertyInObj(matchingCountsObj, matchingCount);
    }
    return matchingCountsObj;
  }

  // 보너스 번호가 일치하면 bonus, 아니면 5를 반환 (matchingCountsWithObj에서 사용)
  checkBonusNumberMatch(bonusLotto, bonusNumber) {
    if (bonusLotto.includes(Number(bonusNumber))) {
      return 'bonus';
    }
    return '5';
  }

  // 일치하는 숫자의 개수를 모아놓은 객체를 사용자가 당첨결과로 볼 수 있도록 수정
  processMatchingNumbersToResult(obj) {
    let result = { ...obj };
    result = Utils.removeItemsWithNumericKeysLessThanThree(result);
    result = Utils.addMissingElements(result);
    return result;
  }
}

export default GameUtils;
