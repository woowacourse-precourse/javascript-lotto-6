import { error } from "../constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(error.NUMBER_IS_NOT_SIX);
    }

    if (numbers.length !== new Set(numbers).length) {
      throw new Error(error.DUPLICATE);
    }

    numbers.forEach((number) => {
      // 범위를 벗어남
      if (number < 1 || number > 45)
        throw new Error(error.NATURAL_NUMBER_IN_RANGE);

      // 정수(자연수)가 아님
      if (!Number.isInteger(number))
        throw new Error(error.NATURAL_NUMBER_IN_RANGE);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
