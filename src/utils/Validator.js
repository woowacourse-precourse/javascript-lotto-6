import { ERROR_MESSAGE } from '../constants/messages.js';
import { MAGIC_NUMBER } from '../constants/magicNumber.js';

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
      Validator.#isLengthSix(array) &&
      Validator.#isNumberInRange(array) &&
      Validator.#isNotDuplicated(array)
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
      value.every(elem => !Number.isNaN(elem)),
      ERROR_MESSAGE.INPUT_TYPE_ERROR,
    );
  }

  static #isNumber(value) {
    return this.#validate(
      value.every(elem => typeof elem === 'number'),
      ERROR_MESSAGE.INPUT_TYPE_ERROR,
    );
  }

  static #isNumberInRange(value) {
    return this.#validate(
      value.every(
        elem =>
          elem >= MAGIC_NUMBER.MIN_NUMBER && elem <= MAGIC_NUMBER.MAX_NUMBER,
      ),
      ERROR_MESSAGE.NUMBER_RANGE_ERROR,
    );
  }

  static #isNotDuplicated(value) {
    const set = new Set(value);
    return this.#validate(set.size === 6, ERROR_MESSAGE.DUPLICATE_ERROR);
  }
}

export default Validator;
