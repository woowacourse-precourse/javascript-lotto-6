import Errors from './constants/Errors.js';

class Validations {
  /** 공백이 있는지 */
  static hasSpace(input) {
    if (/\s+/.test(input)) {
      throw new Error(Errors.HAS_SPACE);
    }
  }

  /** 숫자인지 */
  static isNumber(input) {
    const number = Number(input);
    if (input.length === 0 || Number.isNaN(number)) {
      throw new Error(Errors.NOT_NUMBER);
    }
  }

  /** 양수인지 */
  static isPlus(input) {
    const number = Number(input);
    if (number <= 0) {
      throw new Error(Errors.IS_NOT_PLUS);
    }
  }

  /** 1000원 단위인지 */
  static isThousandUnit(input) {
    const number = Number(input);
    if (number % 1000 !== 0) {
      throw new Error(Errors.IS_NOT_THOUSAND_UNIT);
    }
  }

  /** 1~45 사이의 숫자인지 */
  static isInRange(input) {
    const number = Number(input);
    if (number < 1 || number > 45) {
      throw new Error(Errors.IS_NOT_IN_RANGE);
    }
  }

  /** 소수점이 없는지 */
  static isInteger(input) {
    const number = Number(input);
    if (!Number.isInteger(number)) {
      throw new Error(Errors.IS_NOT_INTEGER);
    }
  }

  /** 중복된 숫자가 없는지 */
  static isNotDuplicated(input) {
    input.forEach((number, index) => {
      if (input.indexOf(number) !== index) {
        throw new Error(Errors.IS_DUPLICATED);
      }
    });
  }

  /** 길이가 6인지 */
  static isProperLength(input) {
    if (input.length !== 6) {
      throw new Error(Errors.IS_NOT_PROPER_LENGTH);
    }
  }

  /** 오름차순으로 정렬되어 있는지 */
  static isSorted(input) {
    const sortedInput = [...input].sort((a, b) => a - b);
    if (JSON.stringify(input) !== JSON.stringify(sortedInput)) {
      throw new Error(Errors.IS_NOT_SORTED);
    }
  }

  /** 보너스 번호가 당첨 번호에 포함되어 있는지 */
  static isBonusNumberNotDuplicated(bonusNumber, lotto) {
    const numbers = lotto.getNumbers();
    if (numbers.includes(Number(bonusNumber))) {
      throw new Error(Errors.IS_BONUS_NUMBER_DUPLICATED);
    }
  }
}

export default Validations;