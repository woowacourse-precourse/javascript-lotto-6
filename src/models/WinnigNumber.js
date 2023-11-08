import { ERROR_SCOPE } from '../utils/constants.js';
import { validate } from '../utils/validate.js';

class WinningNumber {
  #winningNumber;

  constructor(winningNumber) {
    const numbers = this.#splitWinningNumber(winningNumber);
    this.#validate(ERROR_SCOPE.WINNIG, numbers);
    this.#winningNumber = numbers;
  }

  #splitWinningNumber(winningNumber) {
    return winningNumber.split(',');
  }

  #validate(scope, numbers) {
    validate.isCount(scope, numbers);
    validate.isDuplication(scope, numbers);

    numbers.forEach((number) => {
      validate.isInteger(scope, number);
      validate.startZero(scope, number);
      validate.isNumberRange(scope, number);
    });
  }

  getWinningNumber() {
    return this.#winningNumber.map(Number);
  }
}

export default WinningNumber;
