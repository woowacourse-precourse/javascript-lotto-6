import { validate } from '../utils/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    validate.isCount(numbers);
    validate.isDuplication(numbers);
    numbers.forEach((number) => {
      validate.isNumberRange(number);
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
