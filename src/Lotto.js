import { InputError } from './utils/error';
import { ERROR, LOTTERY } from './constants';
export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (new Set(numbers).size !== LOTTERY.NUM_COUNT) {
      throw new InputError(ERROR.NOT_SIX_NUMBERS);
    }
  }
}
