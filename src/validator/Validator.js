import { ERROR, LOTTO } from '../constant/index.js';

class Validator {
  static validateBuyingPrice(number) {
    if (number <= 0) {
      throw new Error(ERROR.BUYING_PRICE.POSITIVE_INTEGER);
    }

    if (number % 1000 !== 0) {
      throw new Error(ERROR.BUYING_PRICE.UNIT);
    }
  }

  static validateLottoNumbers(numbers) {
    if (numbers.length !== LOTTO.NUMBERS_LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.LENGTH);
    }

    numbers.forEach(Validator.#validateLottoNumberRange);

    if (new Set(numbers).size !== LOTTO.NUMBERS_LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.UNIQE);
    }
  }

  static #validateLottoNumberRange(number) {
    if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR.LOTTO_NUMBER_RANGE);
    }
  }

  static validateBonusNumber(bonus, numbers) {
    Validator.#validateLottoNumberRange(bonus);

    if (numbers.includes(bonus)) {
      throw new Error(ERROR.BONUS_NUMBER.UNIQE);
    }
  }
}

export default Validator;
