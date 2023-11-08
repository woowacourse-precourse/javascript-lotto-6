import { ERROR, NUMBER } from "../util/Constants";
class WinningNumbers {
  #winningNumbers = [];

  #bonusNumber;

  constructor(inputWinningNumbers, inputBonusNumber) {
    this.#bonusNumber = Number(inputBonusNumber);
    this.#winningNumbers = this.parseNumbers(inputWinningNumbers);
    this.validateNumbers();
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonus() {
    return this.#bonusNumber;
  }

  validateNumbers() {
    this.checkInteger();
    this.checkLength();
    this.checkRange();
    this.checkDuplication();
  }

  parseNumbers(inputWinningNumbers) {
    return inputWinningNumbers.split(",").map(Number);
  }

  checkInteger() {
    if (!this.#winningNumbers.every((number) => Number.isInteger(number))) {
      throw new Error(ERROR.INVALID_INTEGER);
    }
    if (!Number.isInteger(this.#bonusNumber))
      throw new Error(ERROR.INVALID_INTEGER);
  }

  checkLength() {
    if (this.#winningNumbers.length !== NUMBER.LOTTO_LENGTH) {
      throw new Error(ERROR.INVALID_SIX_NUMBERS);
    }
  }

  checkRange() {
    if (!this.#winningNumbers.every((number) => number >= NUMBER.LOTTO_MIN && number <= NUMBER.LOTTO_MAX)) {
      throw new Error(ERROR.INVALID_NUMBER);
    }
    if (!(this.#bonusNumber >= NUMBER.LOTTO_MIN && this.#bonusNumber <= NUMBER.LOTTO_MAX))
      throw new Error(ERROR.INVALID_NUMBER);
  }

  checkDuplication() {
    if (new Set(this.#winningNumbers).size !== NUMBER.LOTTO_LENGTH) {
      throw new Error(ERROR.INVALID_DUPLICATION);
    }

    if (this.#winningNumbers.includes(this.#bonusNumber)) {
      throw new Error(ERROR.INVALID_DUPLICATION);
    }
  }
}

export default WinningNumbers;
