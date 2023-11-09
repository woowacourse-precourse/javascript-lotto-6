import CustomError from './utils/Errors.js';
import { ERROR_MESSAGE, LOTTO } from './utils/Define.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateNumbersRange(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO.numberCount) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notUniqueNumbers);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO.numberCount) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notNumberCountSix);
    }
  }

  validateOutOfRange(number) {
    if (number < LOTTO.numberMin || number > LOTTO.numberMax) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.outOfRange);
    }
    return true;
  }

  #validateNumbersRange(numbers) {
    const isValid = numbers.every(this.validateOutOfRange);
    if (!isValid) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.outOfRange);
    }
  }

  includeNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
