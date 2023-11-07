import { REGEX } from '../constant/Regex.js';

export default class Validator {
  checkIsNumber(value) {
    if (!REGEX.isNumber.test(value)) {
      throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    }
  }

  checkIsGreaterThanThousand(value) {
    if (!REGEX.isGreaterThanThousand.test(value)) {
      throw new Error('[ERROR] 금액은 1000원 이상이어야 합니다.');
    }
  }

  checkIsThousandMultiple(value) {
    if (!REGEX.isThousandMultiple.test(value)) {
      throw new Error('[ERROR] 금액은 1000원의 배수여야 합니다.');
    }
  }
}
