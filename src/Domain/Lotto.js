import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';
import Validator from '../utils/Validator.js';

class Lotto {
  static minNumber = 1;

  static maxNumber = 45;

  static length = 6;

  static price = 1000;

  #numbers;

  /**
   *
   * @param {string[] | number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);

    this.#numbers = this.#formatLotto(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  isLottoNumber(number) {
    return (
      Validator.isPositiveInteger(number) &&
      number >= Lotto.minNumber &&
      number <= Lotto.maxNumber
    );
  }

  hasInclude(number) {
    return this.#numbers.includes(number);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateLottoNumbers(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== Lotto.length) {
      throw CustomError.lotto(ERROR.message.lotto.length);
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== Lotto.length) {
      throw CustomError.lotto(ERROR.message.lotto.notUnique);
    }
  }

  #validateLottoNumbers(numbers) {
    const validNumbers = numbers.every(this.isLottoNumber);

    if (!validNumbers) {
      throw CustomError.lotto(ERROR.message.lotto.notInRange);
    }
  }

  #formatLotto(numbers) {
    return numbers.map(Number).sort((a, b) => a - b);
  }
}

export default Lotto;
