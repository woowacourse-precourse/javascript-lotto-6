import { ERROR } from "./const/Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.HOW_MANY_SIX);
    }

    const numberSet = new Set(numbers);

    if (numbers.some((number) => typeof number !== "number" || isNaN(number))) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (numberSet.size !== numbers.length) {
      throw new Error(ERROR.NO_DUPLICATES);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR.NUMBER_RANGE);
    }
  }

  ascendingOrder() {
    this.numbers.sort((a, b) => a - b);
  }

  setUserLottoNumbers() {
    this.numbers.split(",").map((numStr) => parseInt(numStr.trim(), 10));
  }
}

export default Lotto;
