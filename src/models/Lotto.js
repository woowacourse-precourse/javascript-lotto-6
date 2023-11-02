import MESSAGES from "../constants/messages";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
