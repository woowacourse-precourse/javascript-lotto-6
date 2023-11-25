import { WINNINGS_MONEY } from '../constants/Rule.js';
const Calculator = {
  /**
   * @param {{rank: any; number: any;}[]} winningResult
   * @returns {number[]}
   */
  calculateWinnings(winningResult) {
    return winningResult.map((v) => WINNINGS_MONEY[v.rank] * v.number);
  },
  /**
   * @param {{rank: any; number: any;}[]} winningResult
   * @returns {number}
   */
  getTotalWinnings(winningResult) {
    return this.calculateWinnings(winningResult).reduce((a, c) => a + c, 0);
  },
  /**
   * @param {number} number
   * @returns {number}
   */
  round(number) {
    return Number(number.toFixed(1));
  },
  /**
   * @param {number} paymentAmount
   * @param  {number} winnings
   * @returns {number}
   */
  calculateRateOfReturn(paymentAmount, winnings) {
    const value = (winnings / paymentAmount) * 100;

    return this.round(value);
  },
  /**
   *
   * @param {{rank: any; number: any;}[]} winningResult
   * @param {number} paymentAmount
   * @returns {number}
   */
  getRateOfReturn(winningResult, paymentAmount) {
    const winnings = this.getTotalWinnings(winningResult);
    const rateOfReturn = this.calculateRateOfReturn(paymentAmount, winnings);

    return rateOfReturn;
  },
};

export default Calculator;
