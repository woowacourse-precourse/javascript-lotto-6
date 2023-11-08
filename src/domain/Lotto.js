import LottoValidator from "../validator/lotto-validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    LottoValidator.lottoLengthValidation(numbers);
    LottoValidator.lottoDuplicatedValidation(numbers);
    LottoValidator.lottoRangeValidation(numbers);
    LottoValidator.lottoTypeValidation(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
