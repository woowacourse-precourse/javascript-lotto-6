import Validation from './service/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isValidWinningNumbersLength(numbers);

    numbers.forEach((number) => {
      Validation.isNumber(number);
      Validation.isNumberInRange(number);
    });

    Validation.isNonDuplicatedNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  callValidate(numbers) {
    this.#validate(numbers);
  }
}

export default Lotto;
