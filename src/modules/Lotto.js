import { error } from "../constants.js";
import { throwErrorIf } from "../utils/index.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.sortInAscendingOrder(numbers);
  }

  #validate(numbers) {
    throwErrorIf(numbers.length !== 6, error.NUMBER_IS_NOT_SIX);
    throwErrorIf(numbers.length !== new Set(numbers).size, error.DUPLICATE);

    numbers.forEach((number) => {
      // 범위를 벗어남
      throwErrorIf(number < 1 || number > 45, error.NATURAL_NUMBER_IN_RANGE);
      // 정수(자연수)가 아님
      throwErrorIf(!Number.isInteger(number), error.NATURAL_NUMBER_IN_RANGE);
    });
  }

  getNumbers() {
    return this.#numbers;
  }

  sortInAscendingOrder(arr) {
    return arr.sort((a, b) => a - b);
  }
}

export default Lotto;
