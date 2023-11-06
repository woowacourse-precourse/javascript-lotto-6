import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new CustomError(ERROR_MESSAGES.lottoNumberLength);

    const duplicateFlag = [...new Set(numbers)].length !== numbers.length;
    if (duplicateFlag) throw new CustomError(ERROR_MESSAGES.lottoNumberDuplicate);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
