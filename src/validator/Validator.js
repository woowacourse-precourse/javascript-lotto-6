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

  checkIsCommaSeparatedNumber(value) {
    if (!REGEX.isCommaSeparatedNumber.test(value)) {
      throw new Error('[ERROR] 로또 번호는 콤마로 구분된 숫자여야 합니다.');
    }
  }

  checkIsSixNumbers(value) {
    if (!REGEX.isSixNumbers.test(value)) {
      throw new Error('[ERROR] 로또 번호는 6개의 숫자여야 합니다.');
    }
  }

  checkIsCommaSeparatedNumberBetween1And45(value) {
    if (!REGEX.isCommaSeparatedNumberBetween1And45.test(value)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  checkIsUnique(value) {
    value.split(',').forEach(number => {
      const otherNumbers = value.split(',').filter(item => item !== number);
      if (otherNumbers.includes(number)) {
        throw new Error('[ERROR] 로또 번호는 유일한 숫자여야 합니다.');
      }
    });
  }

  checkIsNumberBonus(value) {
    if (!REGEX.isNumber.test(value)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
  }

  checkIsBetween1And45(value) {
    if (!REGEX.isBetween1And45.test(value)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  checkIsNotInWin(value, win) {
    if (win.includes(value)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호에 없는 숫자여야 합니다.');
    }
  }
}
