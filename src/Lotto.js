import { ERROR_MESSAGE , LOTTO_LENGTH } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a,b) => a-b);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SIX;
  }

  getNumbers() {
    return this.#numbers;
  }

}

export default Lotto;
