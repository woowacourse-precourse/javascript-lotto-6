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
    numbers.forEach((number) => {
      validateNumberType(number);
    });
    validateLottoLength(numbers);
    validateDuplicateNumber(numbers);
    validateLottoRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
