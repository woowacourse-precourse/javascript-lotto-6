import Validator from "./Validator.js";
import LOTTO from "./constant/LOTTO.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateLength(numbers) {
    if (!Validator.checkArrayLength(numbers, LOTTO.SIZE)) {
      throw new Error(LOTTO.ERROR.SIZE);
    }
  }

  #validateDuplicate(numbers) {
    if (Validator.checkArrayForDuplicate(numbers)) {
      throw new Error(LOTTO.ERROR.DUPLICATE);
    }
  }
}

export default Lotto;
