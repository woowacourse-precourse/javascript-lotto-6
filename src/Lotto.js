import { validateArray } from "./utils/validation.js";
import { LOTTO_ERROR } from "./constant/ERROR.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!validateArray.isNumber(numbers)) {
      throw new Error(LOTTO_ERROR.isNumber);
    }
    if (!validateArray.isSixSize(numbers)) {
      throw new Error(LOTTO_ERROR.isSixSize);
    }
    if (!validateArray.isOneToFourtyFive(numbers)) {
      throw new Error(LOTTO_ERROR.isOneToFourtyFive);
    }
    if (validateArray.isDuplicate(numbers)) {
      throw new Error(LOTTO_ERROR.isDuplicate);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
