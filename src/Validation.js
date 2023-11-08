import { MESSAGE, OPTION } from './Constant.js';

const Validation = {
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
    if (!Validation.isNaturalNumber(number)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_NUMBER_TYPE}`);
    }
    if (!Validation.isInRange(number)) {
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
    if (Validation.isDuplicate(numbers)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.DUPLICATE_NUMBER}`);
    }
    numbers.forEach((number) => Validation.validateLottoNumber(number));
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
    if (Validation.isDuplicate(concattedNumber)) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.DUPLICATE_NUMBER}`);
    }
    concattedNumber.forEach((number) => Validation.validateLottoNumber(number));
  },

  /**
   * 구입금액에 대한 유효성 검사
   * @param {number} money
   */
  validateMoney: (money) => {
    if (!Number.isSafeInteger(Number(money)) || money < 0) {
      throw new Error(`${MESSAGE.ERROR_PREFIX}${MESSAGE.INVALID_MONEY}`);
    }
  },
};

export default Validation;
