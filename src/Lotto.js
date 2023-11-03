import ERROR_MESSAGE from "src/Errors.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoSize);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.lottoSize);
    }
  }
}

export default Lotto;
