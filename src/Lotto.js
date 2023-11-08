import { validateArray } from "./utils/validation.js";
import { LOTTO } from "./constant/ERROR.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!validateArray.isNumber(numbers)) {
      throw new Error(LOTTO.isNumber);
    }
    if (!validateArray.isSize(numbers)) {
      throw new Error(LOTTO.isSize);
    }
    if (!validateArray.isInRange(numbers)) {
      throw new Error(LOTTO.isInRange);
    }
    if (validateArray.isDuplicate(numbers)) {
      throw new Error(LOTTO.isDuplicate);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
