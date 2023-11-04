import { MESSAGE, OPTION } from '../constants/Lotto.js';

export default {
  /**
   * number가 자연수인지
   * @param {number} number
   * @returns {boolean}
   */
  isNaturalNumber: (number) => number >= 1 && number % 1 === 0,

  /**
   * number가 상수 범위 내에 있는지
   * @param {number} number
   * @returns {boolean}
   */
  isInRange: (number) =>
    number >= OPTION.BALL_NUMBER_RANGE[0] &&
    number <= OPTION.BALL_NUMBER_RANGE[1],

  /**
   * 로또 번호 1개에 대한 유효성 감시
   * @param {number} number
   */
  validateLottoNumber: (number) => {
    if (!this.isNaturalNumber(number)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_NUMBER_TYPE}`);
    }
    if (!this.isInRange(number)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_NUMBER_RANGE}`);
    }
  },
};
