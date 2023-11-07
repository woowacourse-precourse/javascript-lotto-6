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

  #validate(numbers) {
    validateLottoNumbersCountMismatch(numbers);
    validateLottoNumbersNotAllNumbers(numbers);
    validateLottoNumbersOutOfRange(numbers);
    validateLottoNumberIsUniq(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
