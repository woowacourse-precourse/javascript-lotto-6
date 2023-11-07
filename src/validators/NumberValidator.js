import CustomError from '../customs/CustomError.js';
import TypeValidator from './TypeValidator.js';

class NumberValidator {
  /**
   * 값이 divisor로 나누어 떨어지는지 검사하는 메서드
   * @param {number} value 검사할 값
   * @param {number} divisor 나누는 수
   * @returns {boolean} 값이 divisor로 나누어 떨어지는지 여부
   */
  static isDivisibleBy(value, divisor) {
    if (divisor === 0) {
      throw new CustomError('divisor는 0이 될 수 없습니다.');
    }

    return TypeValidator.isNumber(value) && value % divisor === 0;
  }

  static isInRange(value, { from, to }) {
    return TypeValidator.isNumber(value) && value >= from && value <= to;
  }
}

export default NumberValidator;
