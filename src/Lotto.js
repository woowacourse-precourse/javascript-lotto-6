import MESSAGES from "./constants/messages";
import SETTINGS from "./constants/settings";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersSet = new Set(numbers);
    const { count, minimum, maximum } = SETTINGS.targetNumber;

    if (numbersSet.size !== count) {
      throw new Error(MESSAGES.error.invalidTargetNumbersLength);
    }
    if (numbers.some((number) => typeof number !== "number")) {
      throw new Error(MESSAGES.error.notNumber);
    }
    if (numbers.some((number) => number > maximum || number < minimum)) {
      throw new Error(MESSAGES.error.invalidRange);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
