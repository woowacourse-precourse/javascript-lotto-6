import { LOTTO_NUM_RANGE, LOTTO_TICKET_PRICE } from '../constants/conditions';
import ERROR_MESSAGE from '../constants/error';

export default class InputValidator {
  static #isNumber(input) {
    const isNumber = /^\d+$/;
    const removeSpace = /\s/g;
    if (Array.isArray(input)) {
      return input.every((num) => isNumber.test(num.replace(removeSpace, '')));
    }
    return isNumber.test(input.replace(removeSpace, ''));
  }

  static #isDuplicatedNumber(input) {
    return input.length !== new Set(input).size;
  }

  static #isValidLottoRange(input) {
    if (Array.isArray(input)) {
      return input.every(
        (num) => num >= LOTTO_NUM_RANGE.min && num <= LOTTO_NUM_RANGE.max,
      );
    }
    return input >= LOTTO_NUM_RANGE.min && input <= LOTTO_NUM_RANGE.max;
  }

  static #isValidLottoLength(lotto) {
    return lotto.length === LOTTO_NUM_RANGE.length;
  }

  static #isDivisibleBy1000(input) {
    return Number(input) % LOTTO_TICKET_PRICE === 0 && Number(input) !== 0;
  }

  static validatePurchaseAmount(input) {
    if (!this.#isNumber(input)) throw new Error(ERROR_MESSAGE.notNumber);
    if (!this.#isDivisibleBy1000(input))
      throw new Error(ERROR_MESSAGE.invalidInput);
    return Number(input);
  }

  static validateWinningLotto(input) {
    if (!this.#isNumber(input)) throw new Error(ERROR_MESSAGE.notNumber);
    if (!this.#isValidLottoLength(input))
      throw new Error(ERROR_MESSAGE.invalidLottoLength);
    if (!this.#isValidLottoRange(input))
      throw new Error(ERROR_MESSAGE.invalidLottoNumRange);
    if (this.#isDuplicatedNumber(input))
      throw new Error(ERROR_MESSAGE.duplicatedLottoNum);
    return input.map(Number);
  }

  static validateBonus(input, winningLotto) {
    if (!this.#isNumber(input)) throw new Error(ERROR_MESSAGE.notNumber);
    if (!this.#isValidLottoRange(input))
      throw new Error(ERROR_MESSAGE.invalidLottoNumRange);
    if (winningLotto.includes(Number(input)))
      throw new Error(ERROR_MESSAGE.duplicatedWinningLotto);
    return Number(input);
  }
}
