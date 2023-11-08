import InputValidator from './domain/validator/InputValidator.js';

/**
 * 새로운 로또를 발행한다.
 *
 * @constructor
 * @param {list} numbers
 */
class Lotto {
  #numbers;
  #inputValidator;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#inputValidator = new InputValidator();
    this.#integratedValidation(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #validateNaturalNumber(numbers) {
    for (const number of numbers) {
      this.#inputValidator.validateNaturalNumber(number);
    }
  }

  #validateNoDuplication(numbers) {
    this.#inputValidator.validateNoDuplication(numbers);
  }

  #validateDrawCases(numbers) {
    this.#inputValidator.validateDrawCases(numbers);
  }

  #validateNotInRange(numbers) {
    this.#inputValidator.validateNotInRange(numbers);
  }

  #integratedValidation(numbers) {
    this.#validateNaturalNumber(numbers);
    this.#validateNoDuplication(numbers);
    this.#validateDrawCases(numbers);
    this.#validateNotInRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
