import { CONSTANT_VALUE, ERROR_MESSAGE } from './constants.js';
import InputError from './InputError.js';
import { vaildateNumberRange, vaildateNumberCheck } from './validateFunctions.js';

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
      vaildateNumberCheck(number);
      vaildateNumberRange(number);
    }
  }

  validateBonus(bonusNumber) {
    const allNumbers = this.#numbers.concat(bonusNumber);
    const numberSet = new Set(allNumbers);

    if (numberSet.size !== allNumbers.length) {
      throw new InputError(ERROR_MESSAGE.noDuplicate);
    }
    vaildateNumberCheck(bonusNumber);
    vaildateNumberRange(bonusNumber);
  }
}

export default Lotto;
