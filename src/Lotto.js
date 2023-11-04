import { ERROR_MESSAGE, LOTTO_FORM } from './constant';
import { throwError, validateNumberRange } from './uttils';
class Lotto {
  #numbers; // number[]

  constructor(numbers) {
    this.#isNumberArray(numbers);
    this.#validateNumbersLength(numbers);
    this.#validateNumbersRange(numbers);
    this.#hasNoRepeatNumber(numbers);
    this.#numbers = numbers.sort();
  }
  #isNumberArray(numbers) {
    if (!Array.isArray(numbers)) throwError(ERROR_MESSAGE.isNotNumberArray);

    if (!numbers.every((v) => typeof v === 'number' && !Number.isNaN(v)))
      throwError(ERROR_MESSAGE.isNotNumberArray);
  }

  #validateNumbersLength(numbers) {
    if (numbers.length !== LOTTO_FORM.length) {
      throwError(ERROR_MESSAGE.sixNumbers);
    }
  }

  #validateNumbersRange(numbers) {
    numbers.forEach((number) => validateNumberRange(number));
  }

  #hasNoRepeatNumber(numbers) {
    if (new Set(numbers).size !== numbers.length)
      throwError(ERROR_MESSAGE.duplicateNumber);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
