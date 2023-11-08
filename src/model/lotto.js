import { lottoLengthValidation, lottoDuplicatedValidation, lottoRangeValidation } from "../validation/lotto-validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    lottoLengthValidation(numbers);
    lottoDuplicatedValidation(numbers);
    lottoRangeValidation(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
