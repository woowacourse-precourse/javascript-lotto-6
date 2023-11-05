import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';
import CustomError from './errors/CustomError.js';
import isPositiveInteger from './utils/function.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.size) {
      throw new CustomError(ERROR.lotto.invalidSize);
    }

    this.#ifNumberIsInvalid(numbers, () => {
      throw new CustomError(ERROR.lotto.invalidNumber);
    });
  }

  get numbers() {
    return this.#numbers;
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  #ifNumberIsInvalid(numbers, callback) {
    numbers.forEach((number) => {
      if (
        number < LOTTO.range.min ||
        number > LOTTO.range.max ||
        !isPositiveInteger(number)
      ) {
        callback();
      }
    });
  }
}

export default Lotto;
