import { isOutOfRange } from '../utils/validator.js';

import ERROR_MESSAGE_GENERATOR from '../constants/error.js';

import ApplicationError from '../exceptions/ApplicationError.js';

class LottoNumber {
  /**
   * 로또의 최소 숫자입니다.
   * @type {number}
   * @readonly
   */
  static MIN_NUMBER = 1;

  /**
   * 로또의 최대 숫자입니다.
   * @type {number}
   * @readonly
   */
  static MAX_NUMBER = 45;

  /**
   * 로또 숫자의 에러메세지입니다.
   * @type {number}
   * @readonly
   */
  static ERROR_MESSAGES = Object.freeze({
    notNumber: ERROR_MESSAGE_GENERATOR.notNumber('로또 숫자'),
    notInteger: ERROR_MESSAGE_GENERATOR.notInteger('로또 숫자'),
    outOfRange: ERROR_MESSAGE_GENERATOR.outOfRange('로또 숫자', {
      min: LottoNumber.MIN_NUMBER,
      max: LottoNumber.MAX_NUMBER,
    }),
  });

  /**
   * 미리 생성해놓은 로또 숫자 인스턴스 목록입니다.
   * @type {number}
   * @readonly
   */
  static #numbers = Object.fromEntries(
    Array.from({ length: LottoNumber.MAX_NUMBER - LottoNumber.MIN_NUMBER + 1 }, (_, i) => [
      i + LottoNumber.MIN_NUMBER,
      new LottoNumber(i + LottoNumber.MIN_NUMBER),
    ]),
  );

  /**
   * 로또의 숫자입니다.
   * @type {number}
   */
  #number;

  /**
   * @param {number} number 로또의 숫자입니다.
   */
  constructor(number) {
    this.#number = number;
  }

  /**
   * @param {number} number 로또의 숫자입니다.
   * @returns {LottoNumber} 로또 숫자입니다.
   */
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
    const { MIN_NUMBER: min, MAX_NUMBER: max } = LottoNumber;
    if (isOutOfRange(number, { min, max })) {
      throw new ApplicationError(LottoNumber.ERROR_MESSAGES.outOfRange);
    }
  }

  /**
   * 로또의 숫자를 반환합니다.
   * @returns {number} 로또의 숫자입니다.
   */
  getNumber() {
    return this.#number;
  }

  /**
   * 입력받은 LottoNumber가 같은 인스턴스인지 비교합니다.
   * @param {LottoNumber} number 비교할 로또 번호입니다.
   * @returns {boolean} 로또 번호의 동일 여부입니다.
   */
  equal(number) {
    return this === number;
  }
}

export default LottoNumber;
