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
   * 로또 번호 1개에 대한 유효성 검사
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

  /**
   * 로또 번호들 중에서 중복이 있는지
   * @param {number[]} numbers
   * @returns {boolean}
   */
  isDuplicate: (numbers) => new Set(numbers).size !== numbers.length,

  /**
   * 로또 번호들에 대한 유효성 검사
   * @param {number[]} numbers
   */
  validateLottoNumbers: (numbers) => {
    if (numbers.length !== OPTION.BALL_COUNT) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_NUMBER_COUNT}`);
    }
    if (this.isDuplicate(numbers)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.DUPLICATE_NUMBER}`);
    }
    numbers.forEach((number) => this.validateLottoNumber(number));
  },

  /**
   * 로또 번호들과 보너스 숫자 대한 유효성 검사
   * @param {number[]} numbers
   * @param {number} bonus
   */
  validateLottoNumbersWithBonus: (numbers, bonus) => {
    const concattedNumber = [...numbers, bonus];

    if (numbers.length !== OPTION.BALL_COUNT) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_NUMBER_COUNT}`);
    }
    if (this.isDuplicate(concattedNumber)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.DUPLICATE_NUMBER}`);
    }
    concattedNumber.forEach((number) => this.validateLottoNumber(number));
  },
};
