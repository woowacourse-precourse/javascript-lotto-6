import MESSAGES from "./constants/messages.js";

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
    if (numbers.some((number) => typeof number !== "number")) {
      throw new Error(MESSAGES.error.notNumber);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
