import ERROR from '../constants/error.js';
import CustomError from '../errors/error.js';

/**
 * is 메서드 : 해당 값이 조건에 맞는지 확인하고 boolean값을 반환합니다.
 * validate 메서드 : 해당 값이 조건에 맞지 않을 경우 에러를 생성합니다.
 */
const Validator = {
  emptyString: '',

  /**
   * 해당 값이 빈 문자열인지 확인합니다.
   * @param {string} value
   * @returns boolean
   */
  isEmptyString(value) {
    return value === this.emptyString;
  },

  /**
   * 해당 값이 공백인지 확인합니다.
   * @param {string} value
   * @returns boolean
   */
  isSpace(value) {
    return String(value).trim() === this.emptyString;
  },

  /**
   * 해당 값이 양의 정수인지 확인합니다.
   * @param {*} value
   * @returns boolean
   */
  isPositiveInteger(value) {
    return (
      !this.isSpace(value) &&
      Number.isInteger(Number(value)) &&
      Number(value) > 0
    );
  },

  /* Validation */
  validateUserInput(value) {
    if (this.isEmptyString(value) || this.isSpace(value)) {
      throw CustomError.inputView(ERROR.message.inputView.emptyString);
    }
  },

  validatePositiveInteger(value) {
    if (!this.isPositiveInteger(value)) {
      throw CustomError.inputView(ERROR.message.inputView.notPositiveInteger);
    }
  },
};

export default Validator;
