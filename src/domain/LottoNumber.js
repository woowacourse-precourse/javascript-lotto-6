import { isOutOfRange } from '../utils/validator.js';

import ERROR_MESSAGE_GENERATOR from '../constants/error.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class LottoNumber {
  static MIN_NUMBER = 1;

  static MAX_NUMBER = 45;

  static ERROR_MESSAGES = Object.freeze({
    notNumber: ERROR_MESSAGE_GENERATOR.notNumber('로또 숫자'),
    notInteger: ERROR_MESSAGE_GENERATOR.notInteger('로또 숫자'),
    outOfRange: ERROR_MESSAGE_GENERATOR.outOfRange('로또 숫자', {
      min: LottoNumber.MIN_NUMBER,
      max: LottoNumber.MAX_NUMBER,
    }),
  });

  static #numbers = Object.fromEntries(
    Array.from({ length: LottoNumber.MAX_NUMBER - LottoNumber.MIN_NUMBER + 1 }, (_, i) => [
      i + LottoNumber.MIN_NUMBER,
      new LottoNumber(i + LottoNumber.MIN_NUMBER),
    ]),
  );

  /**
   * @type {number}
   */
  #number;

  constructor(number) {
    this.#number = number;
  }

  static valueOf(number) {
    LottoNumber.#validate(number);
    return LottoNumber.#numbers[number];
  }

  static #validate(number) {
    if (typeof number !== 'number') {
      throw new ApplicationError(LottoNumber.ERROR_MESSAGES.notNumber);
    }
    if (!Number.isInteger(number)) {
      throw new ApplicationError(LottoNumber.ERROR_MESSAGES.notInteger);
    }
    const [min, max] = [LottoNumber.MIN_NUMBER, LottoNumber.MAX_NUMBER];
    if (isOutOfRange(number, { min, max })) {
      throw new ApplicationError(LottoNumber.ERROR_MESSAGES.outOfRange);
    }
  }

  getNumber() {
    return this.#number;
  }

  /**
   * 입력받은 LottoNumber가 같은 인스턴스인지 비교합니다.
   * @param {LottoNumber} number
   * @returns {boolean}
   */
  equal(number) {
    return this === number;
  }
}

export default LottoNumber;
