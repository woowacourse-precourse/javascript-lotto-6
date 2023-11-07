import { CONSTANT_VALUE, ERROR_MESSAGE } from './constants.js';
import InputError from './InputError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new InputError(ERROR_MESSAGE.onlySixNumber);
    } else if (new Set(numbers).size !== numbers.length) {
      throw new InputError(ERROR_MESSAGE.noDuplicate);
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new InputError(ERROR_MESSAGE.invalidNumberRange);
      } else if (!CONSTANT_VALUE.numberCheck.test(number)) {
        throw new InputError(ERROR_MESSAGE.notNumber);
      }
    }
  }

  validateBonus(bonusNumber) {
    const allNumbers = this.#numbers.concat(bonusNumber);
    const numberSet = new Set(allNumbers);

    if (numberSet.size !== allNumbers.length) {
      throw new InputError(ERROR_MESSAGE.noDuplicate);
    } else if (bonusNumber < 1 || bonusNumber > 45) {
      throw new InputError(ERROR_MESSAGE.invalidNumberRange);
    } else if (!CONSTANT_VALUE.numberCheck.test(bonusNumber)) {
      throw new InputError(ERROR_MESSAGE.notNumber);
    }
  }
}

export default Lotto;
