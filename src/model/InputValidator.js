import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../constants/messages.js';

class InputValidator {
  static errorCondition(condition, message) {
    if (condition) {
      throw new Error(message);
    }
  }

  static validateNumberType(number) {
    this.errorCondition(!/^[1-9]\d*$/.test(number), ERROR_MESSAGES.isNumeric);
  }

  static priceUnitCheck(strPrice) {
    const price = parseInt(strPrice, 10);
    const priceUnit = price % 1000 === 0;
    this.errorCondition(!priceUnit, ERROR_MESSAGES.priceUnit);
  }

  static ValidPurchaseAmount(inputPrice) {
    this.validateNumberType(inputPrice);
    this.priceUnitCheck(inputPrice);
  }
}

// const test = new InputValidator();

try {
  InputValidator.validateNumberType('dk00'); // 예제에서는 1500을 사용, 나머지가 0이 아니므로 에러가 발생해야 함
  console.log('유효한 가격 단위입니다.');
} catch (error) {
  Console.print(`${ERROR_MESSAGES.error} ${error.message}`);
}

export default InputValidator;
