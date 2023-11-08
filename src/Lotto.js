import Constants from "./Constants/ValidateConstants.js";
import LottoResultChecker from "./services/LottoResultChecker.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = "";
  }

  /* eslint-disable class-methods-use-this */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.DUPLICATE_VALUES);
    }

    if (numbers.some((number) => isNaN(Number(number)) || number % 1 !== 0)) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.NOT_AN_INTEGER);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(Constants.LOTTO_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  checkResult(lottoData) {
    this.result = LottoResultChecker.checkResult(this.#numbers, lottoData);
  }
}

export default Lotto;
