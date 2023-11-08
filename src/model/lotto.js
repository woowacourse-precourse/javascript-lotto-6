import LottoValidator from "../validation/lotto-validation.js";

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
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
