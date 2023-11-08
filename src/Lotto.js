import {
  validateLottoNumbersCountMismatch,
  validateLottoNumbersNotAllNumbers,
  validateLottoNumbersOutOfRange,
  validateLottoNumberIsUniq,
} from "./Validation/LottoValidation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  /**
   * 로또 번호가 유효한지 검증한다.
   * @param {number[]} numbers
   */
  #validate(numbers) {
    validateLottoNumbersCountMismatch(numbers);
    validateLottoNumbersNotAllNumbers(numbers);
    validateLottoNumbersOutOfRange(numbers);
    validateLottoNumberIsUniq(numbers);
  }

  /**
   * 로또 번호가 있는 배열을 반환한다.
   * @returns this.#numbers;
   */
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
