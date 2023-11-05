import { ERROR_MESSAGE } from '../constants/messages.js';

class Validator {
  static #validate(condition, errorMsg) {
    if (!condition) {
      throw new Error(errorMsg);
    }
    return true;
  }

  static checkPurchaseAmount(money) {
    return Validator.#isMultipleOfThousand(money);
  }

  static checkLottoNumbers(array) {
    return (
      Validator.#isNotNaN(array) &&
      Validator.#isNumber(array) &&
      Validator.#isLengthSix(array)
    );
  }

  static #isMultipleOfThousand(value) {
    return this.#validate(
      /^[1-9]\d*000$/.test(Number(value)),
      ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR,
    );
  }

  static #isLengthSix(value) {
    return this.#validate(
      value.length === 6,
      ERROR_MESSAGE.LENGTH_NOT_SIX_ERROR,
    );
  }

  static #isNotNaN(value) {
    return this.#validate(
      !Number.isNaN(value[0]),
      ERROR_MESSAGE.INPUT_TYPE_ERROR,
    );
  }

  static #isNumber(value) {
    return this.#validate(
      value.every(elem => typeof elem === 'number'),
      ERROR_MESSAGE.INPUT_TYPE_ERROR,
    );
  }
}

export default Validator;
