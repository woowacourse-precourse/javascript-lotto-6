import { numberValidation } from "../utils/Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    numberValidation(numbers);
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
