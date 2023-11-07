import { LOTTO_ROLE } from '../constants/lotto.js';
import { MESSAGE_FORMAT } from './messageFomat.js';

export default class Validator {
  static #isPositiveNumber(number) {
    return Number.isInteger(number) && number >= 0;
  }

  static #isValidUnit(number) {
    return number % LOTTO_ROLE.unit === 0;
  }

  static #isRequiredCount(numbers) {
    return numbers.length === LOTTO_ROLE.requiredCount;
  }

  static #isValidLottoRange(numbers) {
    const { minNumber, maxNumber } = LOTTO_ROLE;
    return numbers.every((number) => number >= minNumber && number <= maxNumber);
  }

  static #isDuplicatedNumber(numbers) {
    const numbersSet = new Set(numbers);
    return numbers.length !== numbersSet.size;
  }

  static validatePurchaseAmount(amount) {
    if (!this.#isPositiveNumber(amount)) {
      const message = MESSAGE_FORMAT.error('구입 금액은 0 이상의 숫자로 입력해 주세요.');
      throw new Error(message);
    }

    if (!this.#isValidUnit(amount)) {
      const unit = LOTTO_ROLE.unit.toLocaleString();
      const message = MESSAGE_FORMAT.error(`${unit} 단위로 입력해 주세요.`);
      throw new Error(message);
    }
  }

  static validateLotteryNumbers(numbers) {
    if (!this.#isRequiredCount(numbers)) {
      const message = MESSAGE_FORMAT.error('로또 번호는 6개여야 합니다.');
      throw new Error(message);
    }

    if (!this.#isValidLottoRange(numbers)) {
      const { minNumber, maxNumber } = LOTTO_ROLE;
      const message = MESSAGE_FORMAT.error(`로또 번호는 ${minNumber}부터 ${maxNumber}까지입니다.`);
      throw new Error(message);
    }

    if (this.#isDuplicatedNumber(numbers)) {
      const message = MESSAGE_FORMAT.error('로또 번호는 중복되면 안됩니다.');
      throw new Error(message);
    }
  }
}
