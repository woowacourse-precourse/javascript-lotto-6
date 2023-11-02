import { ERROR_MESSAGE } from "../constants/error.js";
import { MONEY_UNIT, LOTTO } from "../constants/constants.js";

class InputValidator {
  // 구입 금액에 대해 검증한다.
  static validateMoney(value) {
    this.isNumber(value, 'money');
    this.isDivideByUnit(value);
    return Number(value);
  }

  // 당첨 번호에 대해 검증한다.
  static validateLuckyNumbers(numbers) {
    numbers.every((number) => this.isNumber(number));
    this.isLengthSix(numbers);
    this.isRepeat(numbers);
    numbers.every((number) => this.isValidLottoNumber(number));
    return numbers;
  }

  // 보너스 번호에 대해 검증한다.
  static validateBonusNumber(number) {
    this.isNumber(number);
    this.isValidLottoNumber(number);
    return Number(number);
  }

  // 숫자가 아닌 경우 금액, 로또 번호에 대해 예외 처리한다.
  static isNumber(value, type = 'number') {
    const isNumber = Number.isSafeInteger(Number(value));
    if (!isNumber) {
      throw new Error(ERROR_MESSAGE.notNumber[type]);
    }
    return isNumber;
  }

  // 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리한다.
  static isDivideByUnit(value) {
    const isDivideByUnit = value % MONEY_UNIT === 0;
    if (!isDivideByUnit) {
      throw new Error(ERROR_MESSAGE.notDivideBy1000);
    }
    return isDivideByUnit;
  }

  // 로또 번호가 6개가 아닌 경우 예외 처리한다.
  static isLengthSix(numbers) {
    const isLengthSix = numbers.length === LOTTO.length;
    if (!isLengthSix) {
      throw new Error(ERROR_MESSAGE.notSixLength);
    }
    return isLengthSix;
  }

  // 로또 번호가 중복되는 경우 예외 처리한다.
  static isRepeat(numbers) {
    const isRepeat = new Set(numbers).size !== numbers.length;
    if (isRepeat) {
      throw new Error(ERROR_MESSAGE.isRepeat);
    }
    return isRepeat;
  }

  // 로또 번호가 1 ~ 45 사이가 아닌 경우 예외 처리한다.
  static isValidLottoNumber(number) {
    const isValidLotto = number >= 1 && number <= 45;
    if (!isValidLotto) {
      throw new Error(ERROR_MESSAGE.notValidLotto);
    }
    return isValidLotto;
  }
}

export default InputValidator;