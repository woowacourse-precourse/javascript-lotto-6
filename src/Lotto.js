import commonValidator from './validator/commonValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateSixLength(numbers);
    this.#validateDuplicated(numbers);
    this.#validateRangeNumber(numbers);
    this.#validateNumberType(numbers);
  }

  #validateSixLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicated(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('로또 번호가 중복되면 안됩니다.');
    }
  }

  #validateRangeNumber(numbers) {
    numbers.forEach((number) => commonValidator.checkLottoNumberRange(number));
  }

  #validateNumberType(numbers) {
    numbers.forEach((number) => commonValidator.checkNumberType(number));
  }

  getAscendingNumber() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
