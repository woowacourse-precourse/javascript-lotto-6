import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import CustomError from '../errors/error.js';
import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);

    this.#numbers = this.#formatLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(LOTTO.separator)}]`;
  }

  isLottoNumber(number) {
    return (
      Validator.isPositiveInteger(number) &&
      number >= LOTTO.minNumber &&
      number <= LOTTO.maxNumber
    );
  }

  hasInclude(number) {
    return this.#numbers.includes(number);
  }

  #validate(numbers) {
    this.#validateFalsy(numbers);
    this.#validateLength(numbers);
    this.#validateLottoNumbers(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateFalsy(numbers) {
    if (!numbers) {
      throw CustomError.lotto(ERROR.message.lotto.falsy);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO.length) {
      throw CustomError.lotto(ERROR.message.lotto.length);
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO.length) {
      throw CustomError.lotto(ERROR.message.lotto.notUnique);
    }
  }

  #validateLottoNumbers(numbers) {
    const validNumbers = numbers.every(this.isLottoNumber);

    if (!validNumbers) {
      throw CustomError.lotto(ERROR.message.lotto.notInRange, numbers);
    }
  }

  #formatLotto(numbers) {
    return numbers.map(Number).sort((a, b) => a - b);
  }
}

export default Lotto;
