import { Console } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE } from "../constants/error.js";
import { LOTTO } from "../constants/constants.js";
import LottoValidator from "./lottoValidator.js";

class InputValidator {
  // 구입 금액에 대해 검증한다.
  static validateMoney(value) {
    if (!this.isNumber(value, 'money')) return false;
    if (!this.isDivideByLottoPrice(value)) return false;

    return Number(value);
  }

  // 당첨 번호에 대해 검증한다.
  static validateLuckyNumbers(numbers) {
    const luckyNumbers = numbers.split(",").map((number) => Number(number));
    if (!this.validateArray(luckyNumbers, this.isNumber)) return false;
    if (!LottoValidator.isLengthSix(luckyNumbers)) return false;
    if (!LottoValidator.isRepeat(luckyNumbers)) return false;
    if (!this.validateArray(luckyNumbers, LottoValidator.isValidLottoNumber)) return false;
    
    return luckyNumbers;
  }

  // 보너스 번호에 대해 검증한다.
  static validateBonusNumber(bonusNumber, luckyNumbers) {
    if (!this.isNumber(bonusNumber)) return false;
    if (!LottoValidator.isValidLottoNumber(bonusNumber)) return false;
    if (!this.isBonusInLuckyNumbers(bonusNumber, luckyNumbers)) return false;

    return bonusNumber;
  }

  // 배열의 모든 원소에 대해 callback 함수를 실행해 검증한다.
  static validateArray(array, callback) {
    const isValid = array.every((value) => callback(value));
    if (!isValid) return false;

    return array;
  }

  // 숫자가 아닌 경우 금액, 로또 번호에 대해 예외 처리한다.
  static isNumber(value, type = 'number') {
    const isNumber = Number.isSafeInteger(Number(value));
    if (!isNumber) {
      Console.print(ERROR_MESSAGE.notNumber[type]);
      return false;
    }
    return true;
  }

  // 1,000원 단위로 나누어 떨어지지 않는 경우 예외 처리한다.
  static isDivideByLottoPrice(value) {
    const isDivideByLottoPrice = value % LOTTO.price === 0;
    if (!isDivideByLottoPrice) {
      Console.print(ERROR_MESSAGE.notDivideByLottoPrice);
      return false;
    }
    return true;
  }

  // 3-3. 보너스 번호는 당첨 번호와 중복되지 않아야 한다.
  static isBonusInLuckyNumbers(bonusNumber, luckyNumbers) {
    const isBonusInLuckyNumbers = luckyNumbers.includes(bonusNumber);
    if (isBonusInLuckyNumbers) {
      Console.print(ERROR_MESSAGE.isBonusInLuckyNumbers);
      return false;
    }
    return true;
  }
}

export default InputValidator;