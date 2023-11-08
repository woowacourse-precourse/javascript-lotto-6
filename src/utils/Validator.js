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
  static #isValidLotteryNumberRange(number) {
    const { minNumber, maxNumber } = LOTTO_ROLE;
    return number >= minNumber && number <= maxNumber;
  }

  static #isValidLotteryNumbersRange(numbers) {
    return numbers.every((number) => this.#isValidLotteryNumberRange(number));
  }

  static #isDuplicatedNumber(numbers) {
    const numbersSet = new Set(numbers);
    return numbers.length !== numbersSet.size;
  }

  static #isIncludedLotteryNumbers(bonusNumber, lotteryNumbers) {
    return lotteryNumbers.includes(bonusNumber);
  }

  static validatePurchaseMoney(amount) {
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

    if (!this.#isValidLotteryNumbersRange(numbers)) {
      const { minNumber, maxNumber } = LOTTO_ROLE;
      const message = MESSAGE_FORMAT.error(
        `로또 번호는 ${minNumber}부터 ${maxNumber}까지의 숫자만 입력해 주세요.`,
      );
      throw new Error(message);
    }

    if (this.#isDuplicatedNumber(numbers)) {
      const message = MESSAGE_FORMAT.error('로또 번호들이 중복되지 않게 입력해 주세요.');
      throw new Error(message);
    }
  }

  static validateBonusNumber(bonusNumber, lotteryNumbers) {
    if (!this.#isValidLotteryNumberRange(bonusNumber)) {
      const { minNumber, maxNumber } = LOTTO_ROLE;
      const message = MESSAGE_FORMAT.error(
        `보너스 번호는 ${minNumber}부터 ${maxNumber}까지의 숫자만 입력해 주세요.`,
      );
      throw new Error(message);
    }

    if (this.#isIncludedLotteryNumbers(bonusNumber, lotteryNumbers)) {
      const message = MESSAGE_FORMAT.error(
        '당첨 번호에 포함되지 않는 보너스 번호를 입력해 주세요.',
      );
      throw new Error(message);
    }
  }
}
