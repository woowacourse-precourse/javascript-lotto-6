import { validateArray } from "./utils/validation.js";
import { LOTTO_ERROR } from "./constant/ERROR.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (validateArray.isNotNumber(numbers)) {
      throw new Error(LOTTO_ERROR.isNumber);
    }
    if (validateArray.isNotSixSize(numbers)) {
      throw new Error(LOTTO_ERROR.isSixSize);
    }
    if (validateArray.isNotOneToFourtyFive(numbers)) {
      throw new Error(LOTTO_ERROR.isOneToFourtyFive);
    }
    if (validateArray.isDuplicate(numbers)) {
      throw new Error(LOTTO_ERROR.isNotDuplicate);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
