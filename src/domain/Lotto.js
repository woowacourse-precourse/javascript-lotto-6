import Validator from "../utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    Validator.lottoNumber(numbers);
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
