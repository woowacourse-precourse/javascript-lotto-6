import { ERROR_MESSAGE } from "./common/Text.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    let setNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.LOTTO_NUMBER}`);
    }
    if (numbers.length !== setNumbers.size) {
      throw new Error(`${ERROR_MESSAGE.BONUS_NUMBER}`);
    }
    numbers.map((el) => {
      if (el > 45 || el < 1) throw new Error(`${ERROR_MESSAGE.LOTTO_NUMBER}`);
    });
  }

  // TODO: 추가 기능 구현

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
