import { NUMBER } from "./utils/constants.js";
import { ERROR } from "./utils/messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.checkWinningNumberCount(numbers);
    this.checkWinningNumberRange(numbers);
    this.checkDuplicateNumber(numbers);
  }

  checkWinningNumberCount(numbers) {
    if (numbers.length !== NUMBER.COUNT) {
      throw new Error(ERROR.INVALID_WINNING_NUMBER_COUNT);
    }
  }

  checkWinningNumberRange(numbers) {
    if (numbers.some((number) => number < NUMBER.MIN || number > NUMBER.MAX)) {
      throw new Error(ERROR.INVALID_WINNING_NUMBER_RANGE);
    }
  }

  checkDuplicateNumber(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.DUPLICATED_WINNING_NUMBER);
    }
  }

  getWinningNumbers() {
    return this.#numbers.map(Number);
  }
}

export default Lotto;
