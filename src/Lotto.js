import { ERROR_MESSAGE } from './constants/Message.js';
import { LOTTO_FORM } from './constants/Rule.js';
import { ErrorController } from './controllers/index.js';
import { isInteger, sortNumbers, validateNumberRange } from './utils/index.js';

class Lotto {
  #numbers; // number[]
  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#isNumberArray(numbers);
    this.#validateNumbersLength(numbers);
    this.#validateNumbersRange(numbers);
    this.#hasNoRepeatNumber(numbers);
    this.#setNumbers(numbers);
  }

  #setNumbers(numbers) {
    this.#numbers = sortNumbers(numbers);
  }

  //정수인 숫자 배열인지 확인
  #isNumberArray(numbers) {
    if (!Array.isArray(numbers) || !numbers.every((v) => isInteger(v)))
      ErrorController.throwError(ERROR_MESSAGE.isNotNumberArray);
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== LOTTO_FORM.length) {
      ErrorController.throwError(ERROR_MESSAGE.sixNumbers);
    }
  }

  #validateNumbersRange(numbers) {
    numbers.forEach((number) => validateNumberRange(number));
  }

  #hasNoRepeatNumber(numbers) {
    if (new Set(numbers).size !== numbers.length)
      ErrorController.throwError(ERROR_MESSAGE.duplicateNumber);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
