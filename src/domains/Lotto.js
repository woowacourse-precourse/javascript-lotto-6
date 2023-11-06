import LottoValidator from "../LottoValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.validateLottoDomain(numbers);
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
