import { ERROR_MESSAGE, LOTTO_FORM } from './constant';
import { throwError, validateNumberRange } from './uttils';
class Lotto {
  #numbers; // number[]

  constructor(numbers) {
    this.#validateLottoNumbers(numbers);
    this.#numbers = numbers.sort();
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

  #validateLottoNumbers(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateNumbersRange(numbers);
    this.#hasNoRepeatNumber(numbers);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
