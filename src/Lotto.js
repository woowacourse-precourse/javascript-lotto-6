import { LOTTO_NUMBER } from './constants/constant.js';
import { ERROR_MESSAGE } from './constants/message.js';
import commonValidator from './validator/commonValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLottoNumberLength(numbers);
    this.#validateDuplicated(numbers);
    this.#validateRangeNumber(numbers);
    this.#validateNumberType(numbers);
  }

  #validateLottoNumberLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER.LENGTH) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH);
    }
  }

  #validateDuplicated(numbers) {
    commonValidator.checkDuplicate(numbers);
  }

  #validateRangeNumber(numbers) {
    numbers.forEach((number) => commonValidator.checkLottoNumberRange(number));
  }

  #validateNumberType(numbers) {
    numbers.forEach((number) => commonValidator.checkNumberType(number));
  }

  getSortNumbers(callback) {
    return [...this.#numbers].sort(callback);
  }
}

export default Lotto;
