import { VALIDATION_ERRORS_MESSAGE } from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length === 0)
      throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (numbers.some((number) => isNaN(number)))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_NUMBER);
    if (numbers.length !== 6)
      throw new Error(VALIDATION_ERRORS_MESSAGE.ENTER_SIX_NUMBERS);
    if (numbers.some((number) => number < 1 || number > 45))
      throw new Error(VALIDATION_ERRORS_MESSAGE.OVER_THE_RANGE);
    if (new Set(numbers).size !== 6)
      throw new Error(VALIDATION_ERRORS_MESSAGE.CONTAIN_SAME_NUMBER);
  }
}

export default Lotto;
