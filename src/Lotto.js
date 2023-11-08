import { MESSAGES } from "./constants.js";
import LottoNumberValidator from "./LottoNumberValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!LottoNumberValidator.checkNumbersCount(numbers)) {
      throw new Error(MESSAGES.lottoNumbersCountError);
    }

    if (!LottoNumberValidator.checkAllNumbersInRange(numbers)) {
      throw new Error(MESSAGES.lottoNumberRangeError);
    }

    if (!LottoNumberValidator.checkAllNumbersUnique(numbers)) {
      throw new Error(MESSAGES.duplicatedLottoNumberError);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
