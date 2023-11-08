import REGEXP from '../constants/regexp.js';
import TypeValidator from './TypeValidator.js';

class StringValidator {
  /**
   * 양의 정수 형태의 문자열인지 검사하는 메서드
   * @param {string} value 검사할 값
   * @returns {boolean} 양의 정수 형태의 문자열인지 여부
   */
  static isPositiveInteger(value) {
    return TypeValidator.isString(value) && REGEXP.POSITIVE_INTEGER.test(value);
  }

  /**
   * 문자열이 콤마로 구분된 숫자인지 검사하는 메서드
   * @param {string} value 검사할 값
   * @returns {boolean} 콤마로 구분된 숫자인지 여부
   */
  static isCommaSeparatedNumbers(value) {
    return TypeValidator.isString(value) && REGEXP.COMMA_SEPARATED_NUMBERS.test(value);
  }
}

export default StringValidator;
