import Validatable from './Validatable.js';
import { COMMA_SEPARATED_NUMBERS, INTERGER } from '../constants/regexp.js';
import ValidatableArray from './ValidatableArray.js';

class ValidatableString extends Validatable {
  /**
   * 정수형태의 문자열인지 검사하는 메서드
   * @returns {boolean} 정수형태의 문자열인지 여부
   * @override Validatable.isInteger
   */
  isInteger() {
    return this.isString() && INTERGER.test(this.value);
  }

  /**
   * 양의 정수 형태의 문자열인지 검사하는 메서드
   * @returns {boolean} 양의 정수 형태의 문자열인지 여부
   */
  isPositiveInteger() {
    return this.isInteger() && this.toInteger() > 0;
  }

  /**
   * 값이 divisor로 나누어 떨어지는지 검사하는 메서드
   * @param {number} divisor
   * @returns {boolean}
   * @override Validatable.isDivisibleBy
   */
  isDivisibleBy(divisor) {
    return this.isInteger() && this.toInteger() % divisor === 0;
  }

  /**
   * 문자열이 콤마로 구분된 숫자인지 검사하는 메서드
   * @returns {boolean} 콤마로 구분된 숫자인지 여부
   */
  isCommaSeparatedNumbers() {
    return this.isString() && COMMA_SEPARATED_NUMBERS.test(this.value);
  }

  /**
   * 문자열을 정수로 변환하는 메서드
   * @returns {number}
   */
  toInteger() {
    return parseInt(this.value, 10);
  }

  /**
   * 문자열을 ValidatableArray 변환하는 메서드
   * @returns {ValidatableArray}
   */
  toValidatableArray() {
    const numbers = this.value.split(',').map((number) => parseInt(number, 10));

    return new ValidatableArray(numbers);
  }
}

export default ValidatableString;
