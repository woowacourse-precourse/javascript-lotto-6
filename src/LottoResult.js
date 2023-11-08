import Validation from "./Validation";

class LottoResult {
  /** @type {Lotto[]}*/
  #lottoes;
  /** @type {number[]}*/
  #numbers;
  /** @type {number}*/
  #bonus;

  /**
   * @param {Lotto[]} lottoes
   */
  setLottoes(lottoes) {
    this.#lottoes = lottoes;
  }

  /**
   * @param {number[]} numbers
   * @param {number} bonus
   */
  setWinningNumber(numbers, bonus) {
    Validation.validateLottoNumbersWithBonus(numbers, bonus);
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  /**
   * @param {number[]} numbers
   * @param {number} bonus
   */
  setWinningNumber(numbers, bonus) {
    Validation.validateLottoNumbersWithBonus(numbers, bonus);
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  /**
   * @returns {number[]}
   */
  getResult() {
    return this.#lottoes.reduce((previousValue, lotto) => {
      const result = previousValue;
      const rank = lotto.getRank(this.#numbers, this.#bonus);
      result[rank] += 1;
      return result;
    }, new Array(7).fill(0));
  }

  /**
   * @param {number[]} result
   * @returns {{prize: number, profit: number}}
   */
  static getProfitWithResult(result) {
    const cost = result.reduce((sum, value) => sum + value * 1000, 0);
    const prize = result
      .slice(1)
      .reduce(
        (sum, value, rank) =>
          sum +
          value * [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000][rank],
        0
      );
    const profit = Math.round((prize / cost) * 1000) / 10;
    return { prize, profit };
  }
}
export default LottoResult;
