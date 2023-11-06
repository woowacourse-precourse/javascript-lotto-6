import { validateLotto } from "./utils/validation.js";
import { LOTTO_ERROR } from "./constant/ERROR.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (validateLotto.isNumber(numbers)) {
      throw new Error(LOTTO_ERROR.isNumber);
    }
    if (validateLotto.isSixSize(numbers)) {
      throw new Error(LOTTO_ERROR.isSixSize);
    }
    if (validateLotto.isOneToFourtyFive(numbers)) {
      throw new Error(LOTTO_ERROR.isOneToFourtyFive);
    }
    if (validateLotto.isNotDuplicate(numbers)) {
      throw new Error(LOTTO_ERROR.isNotDuplicate);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
