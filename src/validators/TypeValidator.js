import REGEXP from '../constants/regexp.js';

class TypeValidator {
  /**
   * 값이 undefined 또는 null인지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} 값이 undefined 또는 null인지 여부
   */
  static isDefined(value) {
    return value !== undefined && value !== null;
  }

  /**
   * 값이 string인지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} string인지 여부
   */
  static isString(value) {
    return typeof value === 'string';
  }

  /**
   * 값이 number인지 검사하는 메서드
   *
   * NaN은 number가 아니므로 false를 반환한다.
   * @param {any} value 검사할 값
   * @returns {boolean} number인지 여부
   */
  static isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
  }

  /**
   * 값이 정수인지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} 정수인지 여부
   */
  static isInteger(value) {
    return this.isNumber(value) && value % 1 === 0;
  }

  /**
   * 값이 양의 정수인지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} 양의 정수인지 여부
   */
  static isPositiveInteger(value) {
    return this.isInteger(value) && value > 0;
  }

  /**
   * 값이 배열인지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} 배열인지 여부
   */
  static isArray(value) {
    return Array.isArray(value);
  }

  /**
   * 값이 비어있는지 검사하는 메서드
   * @param {any} value 검사할 값
   * @returns {boolean} 값이 비어있는지 여부
   */
  static isEmpty(value) {
    if (!this.isDefined(value)) {
      return true;
    }

    if (this.isString(value)) {
      return REGEXP.EMPTY_STRING.test(value);
    }

    if (this.isArray(value)) {
      return value.length === 0;
    }

    return false;
  }
}

export default TypeValidator;
