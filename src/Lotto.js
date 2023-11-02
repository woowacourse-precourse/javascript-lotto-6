import MESSAGES from "./constants/messages";

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
    if (!numbers.every((number) => typeof number === "number")) {
      throw new Error(MESSAGES.error.notNumber);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
