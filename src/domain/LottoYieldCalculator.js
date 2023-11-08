import PRIZES from '../constant/Prizes.js';
import Parser from '../parser/Parser.js';

class LottoYieldCalculator {
  static getYieldRate(money, prizeCount) {
    const totalIncome = this.#calcTotalIncome(prizeCount);
    const yieldRate = (totalIncome / money.get()) * 100;

    return Parser.parseToFixed(yieldRate, 2);
  }

  static #calcTotalIncome(prizeCount) {
    return prizeCount.reduce((sum, count, i) => sum + PRIZES[i] * count, 0);
  }
}

export default LottoYieldCalculator;
