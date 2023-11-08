import { lottoNumbersValidator } from "./utils/validators/LottoNumberValidator";

class Lotto {
  #numbers;

  constructor(numbers) {
    lottoNumbersValidator(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
