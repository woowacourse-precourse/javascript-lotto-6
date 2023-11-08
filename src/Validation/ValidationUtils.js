import { LOTTO_RULE, ERROR_MESSAGES } from '../Constants.js';

class ValidationUtils {
  // 요소가 중복되지 않는지 검증
  static isUnique(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGES.LOTTO.NO_UNIQUE);
    }
  }

  // 입력값이 숫자인지 검증
  static isNumber(input) {
    if (typeof input === 'number') {
      throw new Error(ERROR_MESSAGES.INPUT.NO_NUMBER);
    }
  }
  // 로또 길이가 맞는기 검증
  static isLength(input) {
    if (input !== LOTTO_RULE.LENGTH) {
      throw new Error(ERROR_MESSAGES.LOTTO.NO_LENGTH);
    }
  }

  // 입력값이 없는 상태인지 검증
  static isEmptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.INPUT.IS_EMPTY);
    }
  }

  //양의 정수를 입력하지 않았는지 검증
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGES.INPUT.NO_POSITIVE);
    }
  }

  // 1000원으로 나누어 떨어지지 않는지 검증
  static isNotDivisible(input) {
    if (input % LOTTO_RULE.UNIT !== 0) {
      throw new Error(ERROR_MESSAGES.BUY.BUY_UNIT);
    }
  }
}
