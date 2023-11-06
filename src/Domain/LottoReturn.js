import { Console } from '@woowacourse/mission-utils';
import LOTTO from '../constants/lotto.js';
import { MessageFormat } from '../utils/messageFormat.js';

class LottoReturn {
  /**
   * 수익률(%) 계산
   * @date 2023. 11. 6. - 오후 6:42:35
   *
   * @static
   * @param {*} matchingResult : 당첨 갯수가 몇 개 인지를 저장한 객체
   * @param {*} totalPurchaseAmount : 총 구매 비용
   */
  static calculateReturnRate(matchingResult, totalPurchaseAmount) {
    const totalProfit = totalPurchaseAmount - this.getTotalPrizeAmount(matchingResult);
    const totalReturnRate = Math.abs(1 - totalProfit / totalPurchaseAmount) * LOTTO.rate.percent;
    this.printTotalReturnRate(totalReturnRate);
  }

  /**
   * 총 당첨 금액 계산
   *
   * @static
   * @param {*} matchingResult : 당첨 갯수가 몇 개 인지를 저장한 객체
   * @returns {*} total : 총 당첨금
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

  static printTotalReturnRate(totalReturnRate) {
    Console.print(MessageFormat.totalReturnRate(totalReturnRate));
  }
}

export default LottoReturn;
