import { Console } from '@woowacourse/mission-utils';
import { Validation } from './Validation.js';
import { LOTTO_RULE, INPUT_MESSAGES, ERROR_MESSAGES } from './Constants.js';
import { CustomError } from './CustomError.js';

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validation.isLength(numbers, LENGTH)) {
      throw new CustomError(ERROR_MESSAGES.LOTTO.NO_LENGTH(LENGTH));
    }

    if (!Validation.isUnique(numbers)) {
      throw new CustomError(ERROR_MESSAGES.LOTTO.NO_UNIQUE);
    }

    numbers.forEach((number) => {
      if (!Validation.isNumber(number)) {
        throw new CustomError(ERROR_MESSAGES.LOTTO.NO_NUMBER);
      }

      if (!Validation.isPositive(number)) {
        //console.log(number);
        throw new CustomError(ERROR_MESSAGES.LOTTO.NO_POSITIVE);
      }

      if (!Validation.isOnRange(number, MIN, MAX)) {
        //console.log(number);
        throw new CustomError(ERROR_MESSAGES.LOTTO.NO_RANGE(MIN, MAX));
      }

      if (!Validation.isInteger(number)) {
        throw new CustomError(ERROR_MESSAGES.LOTTO.NO_INTEGER);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
  
  getMatchingCount(winningNumbers) {
    const matchedNumbers = winningNumbers.filter((winningNumber) =>
      this.#numbers.includes(Number(winningNumber)),
    );
    return matchedNumbers.length;
  }
}

export default Lotto;
