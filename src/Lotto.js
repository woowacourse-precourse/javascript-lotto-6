import {
  validateDuplicateNumber,
  validateLottoLength,
  validateLottoRange,
  validateNumberType,
} from './utils/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLottoLength(numbers);
    numbers.forEach((number) => {
      validateNumberType(number);
      validateLottoRange(number);
    });
    validateDuplicateNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
