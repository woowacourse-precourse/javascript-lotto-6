import ERROR_MESSAGE from "./Errors.js";
import { LOTTO_UNIT, LOTTO_LENGTH } from "./constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH.LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.lottoSize);
    }

    if (new Set(numbers).size !== LOTTO_LENGTH.LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.duplicateNumbers);
    }
  }

  static countingLottos(inputMoney) {
    return inputMoney / LOTTO_UNIT.MONEY_UNIT;
  }
}

export default Lotto;
