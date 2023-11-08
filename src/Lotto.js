import { ERROR_MSG } from './constants.js';
import { isSixNumber, isOneToFourtyfiveNumber, isDuplicatedList, isNumber } from './common/validate.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isSixNumber(numbers)) throw new Error(ERROR_MSG.NOT_SIX_NUMBER);
    numbers.forEach((number) => {
      if (!isOneToFourtyfiveNumber(number)) throw new Error(ERROR_MSG.ONE_TO_FOURTYFIVE_ERR);
      if (!isNumber(number)) throw new Error(ERROR_MSG.NOT_NUMBER_ERR);
    });
    if (isDuplicatedList(numbers)) throw new Error(ERROR_MSG.DUPLICATE_ERR);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
