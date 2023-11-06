import { Console } from '@woowacourse/mission-utils';
import LOTTO from '../constants/lotto.js';
import { MessageFormat } from '../utils/messageFormat.js';

class LottoReturn {
  /**
   * 수익률(%)을 계산하고 출력합니다.
   * @param {Object} matchingResult 각 당첨 갯수를 저장한 객체
   * @param {number} totalPurchaseAmount 총 구매 비용
   * @returns {void} 반환값 없음
   */
  static calculateReturnRate(matchingResult, totalPurchaseAmount) {
    const totalProfit = totalPurchaseAmount - this.getTotalPrizeAmount(matchingResult);
    const totalReturnRate = Math.abs(1 - totalProfit / totalPurchaseAmount) * LOTTO.rate.percent;
    this.printTotalReturnRate(totalReturnRate);
  }

  /**
   * 총 당첨 금액을 계산합니다.
   * @param {Object} matchingResult 각 당첨 갯수를 저장한 객체
   * @returns {number} total 총 당첨금
   */
  static getTotalPrizeAmount(matchingResult) {
    /**
     * matchingResult 객체의 키를 순회하면서, 각 키에 해당하는 당첨 금액을 합산한다.
     */
    return Object.keys(matchingResult).reduce((total, key) => {
      const count = matchingResult[key];
      const prizeInfo = LOTTO.lottoPrizesMap.get(key);

      if (prizeInfo) total += prizeInfo.prize * count;

      return total;
    }, 0);
  }

  /**
   * 수익률을 출력합니다.
   * @param {number} totalReturnRate 총 수익률
   * @returns {void} 반환값 없음
   */
  static printTotalReturnRate(totalReturnRate) {
    Console.print(MessageFormat.totalReturnRate(totalReturnRate));
  }
}

export default LottoReturn;
