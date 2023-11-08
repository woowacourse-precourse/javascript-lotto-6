import ERROR_MESSAGE from '../constants/erroeMessage.js';

const { duplicateError, numbersLengthError, validRange } = ERROR_MESSAGE;

class LottoValidator {
  constructor(value) {
    this.value = value;
  }

  start() {
    this.#validateDuplicate(this.value);
    this.#validateLength(this.value);
    this.value.forEach(number => {
      this.#validateNumber(number);
    });
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(numbersLengthError);
    }
  }

  #validateDuplicate(numbers) {
    const uniqueNumbers = [...new Set(numbers)]; // 중복 제거
    if (uniqueNumbers.length !== numbers.length) {
      throw new Error(duplicateError);
    }
  }

  #validateNumber(number) {
    if (Number.isNaN(number) || number < 1 || number > 45 || number % 1 !== 0) {
      throw new Error(validRange);
    }
  }
}

export default LottoValidator;
