import { validate } from '../utils/validate.js';

class WinningNumber {
  #winningNumber;

  constructor(winningNumber) {
    const numbers = this.#splitWinningNumber(winningNumber);
    this.#validate(numbers);
    this.#winningNumber = numbers;
  }

  #splitWinningNumber(winningNumber) {
    return winningNumber.split(',');
  }

  #validate(numbers) {
    validate.isCount(numbers);
    validate.isDuplication(numbers);

    numbers.forEach((number) => {
      validate.isInteger(number);
      validate.startZero(number);
      validate.isNumberRange(number);
    });
  }

  getWinningNumber() {
    return this.#winningNumber.map(Number);
  }
}

export default WinningNumber;
