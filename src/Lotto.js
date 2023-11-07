import validation from "./utils/validation.js";
import { LOTTO } from "./utils/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      validation.isValidNumber(number);
    });
    numbers.forEach((number) => {
      validation.isValidRange(number);
    });
    validation.isValidInputCount(numbers, LOTTO.WINNING_NUMBERS_COUNT);
    validation.hasSameNumber(numbers);
  }

  get winningNumbers() {
    this.#numbers = this.#numbers.map((input) => parseInt(input));
    return this.#numbers;
  }
}

export default Lotto;
