import CONSTANTS from '../../Lib/constans.js';
import OutputHandler from '../../View/OutputHandler.js';

class ResultReturn {
  /**
   * 수익률(%)을 계산하고 출력한다.
   *
   * @param {Object} matchingResult 각 당첨 갯수를 저장한 객체
   * @param {number} totalPurchaseAmount 총 구매 비용
   * @returns {void} 반환값 없음
   */
  calculateReturnRate(matchingResult, totalPurchaseAmount) {
    const totalProfit = totalPurchaseAmount - this.getTotalPrizeAmount(matchingResult);
    const totalReturnRate =
      Math.abs(1 - totalProfit / totalPurchaseAmount) * CONSTANTS.rate.percent;
    this.printTotalReturnRate(totalReturnRate);
  }

  /**
   * 총 당첨 금액을 계산한다.
   *
   * @param {Object} matchingResult 각 당첨 갯수를 저장한 객체
   * @returns {number} total 총 당첨금
   */
  getTotalPrizeAmount(matchingResult) {
    return Object.keys(matchingResult).reduce((total, key) => {
      const count = matchingResult[key];
      const prizeInfo = CONSTANTS.lottoPrizesMap.get(key);

      if (prizeInfo) total += prizeInfo.prize * count;

      return total;
    }, 0);
  }

  /**
   * 수익률을 출력한다.
   *
   * @param {number} totalReturnRate 총 수익률
   * @returns {void} 반환값 없음
   */
  printTotalReturnRate(totalReturnRate) {
    OutputHandler.printTotalReturnRate(totalReturnRate);
  }
}

export default ResultReturn;
