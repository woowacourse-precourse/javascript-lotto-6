import ERROR_MESSAGE from "./Errors.js";
import View from "./View.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoSize);
    }
  }

  static countingLottos(inputMoney) {
    return inputMoney / 1000;
  }
}

export default Lotto;
