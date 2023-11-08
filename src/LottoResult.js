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
    this.#bonus = bonus;
    this.#numbers = numbers;
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
    }, new Array(6 + 1).fill(0));
  }
}
export default LottoResult;
