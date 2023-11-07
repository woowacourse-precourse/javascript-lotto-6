import InputError from "../errors/InputError.js";
import { ERRORS } from "../utils/constants.js";
import { LOTTO_GAME_RULE } from "../utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_GAME_RULE.lottoCount) {
      throw new Error(`${ERRORS.error} ${ERRORS.numberLengthError}`);
    }

    if (new Set(numbers).size !== LOTTO_GAME_RULE.lottoCount) {
      throw new Error(`${ERRORS.error} ${ERRORS.duplicatedNumberError}`);
    }

    numbers.forEach((number) => {
      InputError.checkNonNumeric(number);
      InputError.checkNagativeNumber(number);
      InputError.checkOutOfRangeNumber(number);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
