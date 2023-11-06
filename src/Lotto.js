import {
  validateLottoNumbersCountMismatch,
  validateLottoNumbersNotAllNumbers,
  validateLottoNumbersOutOfRange,
} from "./LottoValidation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    validateLottoNumbersCountMismatch(numbers);
    validateLottoNumbersNotAllNumbers(numbers);
    validateLottoNumbersOutOfRange(numbers);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
