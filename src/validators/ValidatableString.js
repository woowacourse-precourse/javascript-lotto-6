import Validatable from './Validatable.js';
import { INTERGER } from '../constants/regexp.js';

class CustomString extends Validatable {
  /**
   * 정수형태의 문자열인지 검사하는 메서드
   * @returns {boolean} 정수형태의 문자열인지 여부
   * @override Validatable.isInteger
   */
  isInteger() {
    if (!this.isString()) {
      return false;
    }

    return INTERGER.test(this.value);
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
   * 문자열을 정수로 변환하는 메서드
   * @returns {number}
   */
  toInteger() {
    return parseInt(this.value, 10);
  }
}

export default CustomString;
