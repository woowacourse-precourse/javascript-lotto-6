import { LOTTO_PRICE } from './constants/number.js';
import Message from './utils/Message.js';

class Statistics {
  #rankCount = [0, 0, 0, 0, 0];

  /**
   *
   * @param {LottoResult[]} results
   */
  constructor(results) {
    this.results = results;
    this.#calculate();
  }

  /**
   * 통계를 출력하는 메서드
   */
  show() {
    const profitRate = this.#getProfitRate();
    Message.showStatistics(this.#rankCount, profitRate);
  }

  /**
   * 등수 별 당첨 횟수를 계산하는 메서드
   */
  #calculate() {
    this.results.forEach((result) => {
      const rank = result.getRank();
      if (rank > -1) this.#rankCount[rank] += 1;
    });
  }

  /**
   * 수익률을 계산하는 메서드
   * @returns {number} 수익률
   */
  #getProfitRate() {
    const totalPrize = this.results.reduce((acc, result) => acc + result.getPrize(), 0);
    const totalPurchase = this.results.length * LOTTO_PRICE;

    return (totalPrize / totalPurchase) * 100;
  }
}

export default Statistics;
