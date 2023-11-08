import { ERROR_MESSAGE } from "./constants/Constant";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.length !== new Set(numbers).sizes) {
      throw new Error(ERROR_MESSAGE.LOTTO_INPUT);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
