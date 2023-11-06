import { EMPTY_STRING } from '../constants/regexp.js';

class Validatable {
  /**
   * @param {unknown} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * 값이 divisor로 나누어 떨어지는지 검사하는 메서드
   * @param {number} divisor 나누는 수
   * @returns {boolean} 값이 divisor로 나누어 떨어지는지 여부
   */
  isDivisibleBy(divisor) {
    return this.isNumber() && this.value % divisor === 0;
  }

  /**
   * 값이 undefined 또는 null인지 검사하는 메서드
   * @returns {boolean} 값이 undefined 또는 null인지 여부
   */
  isDefined() {
    return this.value !== undefined && this.value !== null;
  }

  /**
   * 값이 string인지 검사하는 메서드
   * @returns {boolean} string인지 여부
   */
  isString() {
    return typeof this.value === 'string';
  }

  /**
   * 값이 number인지 검사하는 메서드
   * NaN은 number가 아니므로 false를 반환한다.
   * @returns {boolean} number인지 여부
   */
  isNumber() {
    return typeof this.value === 'number' && !Number.isNaN(this.value);
  }

  /**
   * 값이 정수인지 검사하는 메서드
   * @returns {boolean} 정수인지 여부
   */
  isInteger() {
    return this.isNumber() && this.value % 1 === 0;
  }

  /**
   * 값이 비어있는지 검사하는 메서드
   * @returns {boolean} 값이 비어있는지 여부
   */
  isEmpty() {
    if (!this.isDefined()) {
      return true;
    }

    if (this.isString()) {
      return EMPTY_STRING.test(this.value);
    }

    if (this.isArray()) {
      return this.value.length === 0;
    }

    return false;
  }
}

export default Validatable;
