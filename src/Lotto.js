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
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== PICK_NUMBER) {
      throw new Error(INPUT_NUMBER_ERROR_MESSAGE);
    }

    numbers.forEach((number) => {
      if (number > MAX || number < MIN || Number(number) !== parseInt(number)) {
        throw new Error(INPUT_RANGE_ERROR_MESSAGE);
      }
    });

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(INPUT_DUPLICATE_ERROR_MESSAGE);
    }
  }

  getNumbers() {
    return this.#numbers.map(function (number) {
      return (number = Number(number));
    });
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
