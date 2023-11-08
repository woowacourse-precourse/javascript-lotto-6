import { LOTTO_RULE, REGEX } from "./constants/BusinessNumber.js";
import { LOTTO_ERROR } from "./constants/Messeage.js";
import CustomError from "./error/CustomError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(LOTTO_ERROR.luckyOver);
    }

    numbers.forEach((number) => {
      if (number > LOTTO_RULE.maxNumber || number < LOTTO_RULE.minNumber) {
        throw new CustomError(LOTTO_ERROR.luckyRange);
      }      
    });

    this.#validateExtends(numbers);
  }

  #validateExtends(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== setNumbers.size) {
      throw new CustomError(LOTTO_ERROR.luckyConflict);
    }

    if (REGEX.commaNumber.test(String(numbers))) {
      throw new CustomError(LOTTO_ERROR.form);
    }
  }

  getLuckyNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
