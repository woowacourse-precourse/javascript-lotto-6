import CustomError from './errors/CustomError.js';
import { ERROR_MESSAGES } from './constants/messages.js';
import LOTTO_CONSTANT_NUMBER from './constants/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONSTANT_NUMBER.winningNumbersLength) throw new CustomError(ERROR_MESSAGES.lottoNumberLength);

    const duplicateFlag = new Set(numbers).size !== numbers.length;
    if (duplicateFlag) throw new CustomError(ERROR_MESSAGES.lottoNumberDuplicate);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
