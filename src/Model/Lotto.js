import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';
import { isPositiveInteger } from '../utils/function.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  get numbers() {
    return this.#numbers;
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#ifSizeIsInvalid(numbers, () => {
      throw new CustomError(ERROR.lotto.invalidSize);
    });

    this.#ifNumberIsInvalid(numbers, () => {
      throw new CustomError(ERROR.lotto.invalidNumber);
    });

    this.#ifNumberIsDuplicated(numbers, () => {
      throw new CustomError(ERROR.lotto.duplicatedNumber);
    });
  }

  #ifSizeIsInvalid(numbers, callback) {
    if (numbers.length !== LOTTO.size) {
      callback();
    }
  }

  isInvalidLottoNumber(number) {
    return (
      number < LOTTO.range.min ||
      number > LOTTO.range.max ||
      !isPositiveInteger(number)
    );
  }

  #ifNumberIsInvalid(numbers, callback) {
    numbers.forEach((number) => {
      if (this.isInvalidLottoNumber(number)) {
        callback();
      }
    });
  }

  #ifNumberIsDuplicated(numbers, callback) {
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length) {
      callback();
    }
  }
}

export default Lotto;
