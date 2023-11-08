import {
  MIN,
  MAX,
  PICK_NUMBER,
  INPUT_RANGE_ERROR_MESSAGE,
  INPUT_NUMBER_ERROR_MESSAGE,
  INPUT_DUPLICATE_ERROR_MESSAGE,
} from "./Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  validate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(INPUT_DUPLICATE_ERROR_MESSAGE);
    }

    if (numbers.length !== PICK_NUMBER) {
      throw new Error(INPUT_NUMBER_ERROR_MESSAGE);
    }

    numbers.forEach((number) => {
      if (number > MAX || number < MIN || Number(number) !== parseInt(number)) {
        throw new Error(INPUT_RANGE_ERROR_MESSAGE);
      }
    });
  }
}

export default Lotto;
