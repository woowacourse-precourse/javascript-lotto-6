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

    numbers.forEach((number) => {
      const parsed = parseInt(number);
      if (isNaN(parsed) || (parsed >= 1 && parsed <= 45))
        throw new Error(error.NATURAL_NUMBER_IN_RANGE);
    });

    if (numbers.length !== new Set(numbers).length) {
      throw new Error(error.DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
