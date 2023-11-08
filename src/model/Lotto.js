import Validator from "../utils/Validator";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
