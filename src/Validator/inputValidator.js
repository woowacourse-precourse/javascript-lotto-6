import { ERROR_MESSAGE } from "../constants/error.js";
import { MONEY_UNIT } from "../constants/constants.js";

class InputValidator {
  // 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  static validateMoney(value) {
    this.isNumber(value);
    this.isDivideByUnit(value);
  }

  static validateLuckyNumbers(numbers) {
    numbers.every((number) => this.isNumber(number));
    this.isRepeat(numbers);
    numbers.every((number) => this.isValidLottoNumber(number));
  }

  static validateBonusNumber(number) {
    this.isNumber(number);
    this.isValidLottoNumber(number);
  }

  static isNumber(value) {
    const isNumber = Number.isSafeInteger(Number(value));
    if (!isNumber) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }
    return isNumber;
  }

  static isDivideByUnit(value) {
    const isDivideByUnit = value % MONEY_UNIT === 0;
    if (!isDivideByUnit) {
      throw new Error(ERROR_MESSAGE.notDivideBy1000);
    }
    return isDivideByUnit;
  }

  static isRepeat(numbers) {
    const isRepeat = new Set(numbers).size !== numbers.length;
    if (isRepeat) {
      throw new Error(ERROR_MESSAGE.isRepeat);
    }
    return isRepeat;
  }

  static isValidLottoNumber(number) {
    const isValidLotto = number >= 1 && number <= 45;
    if (!isValidLotto) {
      throw new Error(ERROR_MESSAGE.notValidLotto);
    }
    return isValidLotto;
  }
}

export default InputValidator;