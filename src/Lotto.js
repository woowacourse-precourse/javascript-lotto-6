import { ERROR_MESSAGE } from "./constants/message";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.invalidLottoCount);
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGE.invalidLottoDuplicate);
    numbers.forEach((num) => {
      if (num < 1 || num > 45) throw new Error(ERROR_MESSAGE.invalidLottoRange);
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
