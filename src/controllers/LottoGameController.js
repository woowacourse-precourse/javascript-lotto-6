import { Random } from '@woowacourse/mission-utils';
import Conditions from '../constants/Conditions.js';

class LottoGameController {
  /** 
   * 구매자 로또 번호 생성
   * @param {number} lottoCount
  */
  static generateCustomerNumbers(lottoCount) {
    const customerNumbers = [];
    for (let i = 0; i < lottoCount; i += 1) {
      const temp = Random.pickUniqueNumbersInRange(
        Conditions.NUMBER_MIN,
        Conditions.NUMBER_MAX,
        Conditions.NUMBER_PICK_COUNT,
      );
      this.sortInAscendingOrder(temp);
      customerNumbers.push(temp);
    }
    return customerNumbers;
  }

  static sortInAscendingOrder(userNumbers) {
    userNumbers.sort((a, b) => a - b);
  }

  /**
   * 당처 번호와 구매자 로또 번호 비교
   * @param {Array} customerNumbers 
   * @param {Array} winningNumbers 
   * @param {number} bonusNumber 
   * @returns {Array}
   */
  static matchRank(customerNumbers, winningNumbers, bonusNumber) {
    const matchCounts = Array(Conditions.TOTAL_RANK).fill(
      Conditions.INITIAL_MATCH_COUNT,
    );
    for (let i = 0; i < customerNumbers.length; i += 1) {
      const matchCount = this.matchCount(customerNumbers[i], winningNumbers);
      const isBonusMatch = customerNumbers[i].includes(bonusNumber);
      this.updateMatchCounts(matchCounts, matchCount, isBonusMatch);
    }
    return matchCounts;
  }

  static matchCount(customerNumber, winningNumbers) {
    return customerNumber.filter(number => winningNumbers.includes(number))
      .length;
  }

  static updateMatchCounts(matchCounts, matchCount, isBonusMatch) {
    switch (matchCount) {
      case 6: matchCounts[Conditions.RANK[0].INDEX] += Conditions.COUNT; break;
      case 4: matchCounts[Conditions.RANK[3].INDEX] += Conditions.COUNT; break;
      case 3: matchCounts[Conditions.RANK[4].INDEX] += Conditions.COUNT; break;
      default: break;
    }
    if (matchCount === 5 && isBonusMatch) {
      matchCounts[Conditions.RANK[1].INDEX] += Conditions.COUNT;
    } else if (matchCount === 5) {
      matchCounts[Conditions.RANK[2].INDEX] += Conditions.COUNT;
    }
  }

  /**
   * 수익률 계산
   * @param {Array} matchCounts 
   * @param {number} lottoPrice 
   * @returns {number}
   */
  static returnOfInvestment(matchCounts, lottoPrice) {
    const totalPrize = matchCounts.reduce((acc, cur, index) => {
      acc += cur * Conditions.RANK[index].PRIZE;
      return acc;
    }, 0);
    return (totalPrize / lottoPrice * 100).toFixed(1);
  }
}

export default LottoGameController;