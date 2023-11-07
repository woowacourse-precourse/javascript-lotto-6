import CustomError from './utils/Errors';
import { ERROR_MESSAGE, LOTTO } from './utils/Define';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateDuplicate(numbers);
    this.#validateLength(numbers);
    this.#validateNumbersRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== Lotto.length) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notUniqueNumbers);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO.numberCount) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.notNumberCountSix);
    }
  }

  includeNumber(number) {
    return this.#numbers.includes(number);
  }

  validateOutOfRange(number) {
    if (number > LOTTO.numberMin || number > LOTTO.numberMax) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.outOfRange);
    }
  }

  #validateNumbersRange(numbers) {
    numbers.every(this.validateOutOfRange);
  }
}

export default Lotto;
