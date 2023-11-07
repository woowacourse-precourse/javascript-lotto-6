import { LOTTO_CONDITION, PRICE_PER_TICKET } from '../constants/constants.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

class LottoValidator {
  // 구입금액의 유효성을 검증하고 예외처리한다. (타입, 조건, 범위)
  validatePurchaseAmount(amount) {
    if (!this.#isNumberic(amount)) {
      throw new Error(ERROR_MESSAGE.invalidNumberic);
    }

    if (amount % PRICE_PER_TICKET !== 0 || amount < 0) {
      throw new Error(ERROR_MESSAGE.invalidAmount);
    }
  }

  // 6자리 로또 번호배열을 검증하고 예외처리한다. (길이, 타입, 범위, 중복)
  validateLottoNumber(numbers) {
    if (!this.#isValidLength(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidLength);
    }

    if (!this.#isEveryNumberic(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidNumberic);
    }

    if (!this.#isValidEveryRange(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidRange);
    }

    if (!this.#isValidUniqueName(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidUnique);
    }
  }

  /**
   * 보너스번호의 유효성을 검증하고 예외처리한다. (타입, 범위, 중복)
   * @param {number} bonusNumber
   * @param {boolean} isContainning
   */
  validateBonusNumber(bonusNumber, isContainning) {
    if (!this.#isNumberic(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.invalidBonusNumber);
    }

    if (!this.#isValidRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.invalidRange);
    }

    if (isContainning) {
      throw new Error(ERROR_MESSAGE.invalidUniqueBonusNumber);
    }
  }

  #isValidLength(numbers) {
    return numbers.length === LOTTO_CONDITION.length;
  }

  #isValidRange(number) {
    return number >= LOTTO_CONDITION.startRange && number <= LOTTO_CONDITION.endRange;
  }

  #isValidEveryRange(numbers) {
    return numbers.every((number) => this.#isValidRange(number));
  }

  #isValidUniqueName(numbers) {
    return new Set(numbers).size === LOTTO_CONDITION.length;
  }

  #isNumberic(number) {
    const numberRegExp = /^\d+/;
    return numberRegExp.test(number) && !Number.isNaN(Number(number));
  }

  #isEveryNumberic(numbers) {
    return numbers.every((number) => this.#isNumberic(number));
  }
}

export default LottoValidator;
