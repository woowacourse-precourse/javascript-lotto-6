import { ERROR } from "../constants/constants.js";

class WinningLotto {
  #winningLotto;

  constructor(input) {
    const numbers = input.split(',').map(Number);
    this.checkValid(numbers);
    this.#winningLotto = numbers;
  }

  checkValid(numbers) {
    if (numbers.some((num) => isNaN(num))) {
      throw new Error(ERROR.invalidNumber);
    }
    if (numbers.some((num) => num < 0 || num > 45)) {
      throw new Error(ERROR.invalidRange);
    }
    if (numbers.length !== 6) {
      throw new Error(ERROR.invalidLength);
    }
  }

  getWinningNums() {
    return this.#winningLotto;
  }
}

export default WinningLotto;
