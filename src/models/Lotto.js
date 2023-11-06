import { error } from "../constants";
import { throwErrorIf } from "../utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    throwErrorIf(numbers.length !== 6, error.NUMBER_IS_NOT_SIX);
    throwErrorIf(numbers.length !== new Set(numbers).length, error.DUPLICATE);

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
}

export default Lotto;
