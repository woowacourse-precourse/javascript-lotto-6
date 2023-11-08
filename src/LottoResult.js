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
}
export default LottoResult;
