import LottoValiation from "../validations/LottoValidation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValiation.checkLotto(numbers);
    this.#numbers = numbers;
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
