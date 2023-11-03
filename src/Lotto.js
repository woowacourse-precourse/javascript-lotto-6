import Validator from "./Validator.js";
import LOTTO from "./constant/LOTTO.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validator.checkArrayLength(numbers, LOTTO.SIZE)) {
      throw new Error(LOTTO.ERROR.SIZE);
    }

    if (Validator.checkArrayForDuplicate(numbers)) {
      throw new Error(LOTTO.ERROR.DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
