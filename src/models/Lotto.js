import { ERROR_SCOPE } from '../utils/constants.js';
import { validate } from '../utils/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(ERROR_SCOPE.LOTTO, numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(scope, numbers) {
    validate.isCount(scope, numbers);
    validate.isDuplication(scope, numbers);
    numbers.forEach((number) => {
      validate.isNumberRange(scope, number);
    });
  }

  #sortNumbers() {
    this.#numbers.sort(
      (firstNumber, secondNumber) => firstNumber - secondNumber
    );
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
