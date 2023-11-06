import { MATCHING, MONEY } from '../constants/constants.js';

class Profit {
  /** @param {number[]} compareCounts 당첨번호와 비교해서 일치하는 개수 */
  constructor(compareCounts) {
    /** @type {{money:number, count:number}[]} */
    this.winningHistory = [
      { money: MONEY.THREE, count: MONEY.DEFAULT_COUNT },
      { money: MONEY.FOUR, count: MONEY.DEFAULT_COUNT },
      { money: MONEY.FIVE, count: MONEY.DEFAULT_COUNT },
      { money: MONEY.BONUS, count: MONEY.DEFAULT_COUNT },
      { money: MONEY.SIX, count: MONEY.DEFAULT_COUNT },
    ];

    this.#countHistory(compareCounts);
  }

  /**
   * 당첨 내역 카운트 하는 함수
   * @param {number[]} compareCounts
   */
  #countHistory(compareCounts) {
    compareCounts.forEach((number) => {
      if (number === MATCHING.THREE) this.winningHistory[0].count += 1;
      else if (number === MATCHING.FOUR) this.winningHistory[1].count += 1;
      else if (number === MATCHING.FIVE) this.winningHistory[2].count += 1;
      else if (number === MATCHING.BONUS) this.winningHistory[3].count += 1;
      else if (number === MATCHING.SIX) this.winningHistory[4].count += 1;
    });
  }

  /**
   * 당첨 내역 기록 리턴 함수
   * @returns {number[]}
   */
  getHistory() {
    return this.winningHistory.map(({ count }) => count);
  }

  /**
   * 구입 금액과 수익 총 수익률 계산 함수
   * @param {number} money 구입 금액
   * @returns {number} 수익률
   */
  calculate(money) {
    const total = this.winningHistory.reduce(
      (acc, cur) => (acc += cur.money * cur.count),
      0,
    );

    return Math.round((total / money) * 100 * 10) / 10;
  }
}

export default Profit;
