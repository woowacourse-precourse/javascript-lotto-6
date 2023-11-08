import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, INIT } from '../constants/messages.js';

class InputValidator {
  static errorCondition(condition, message) {
    if (condition) {
      throw new Error(`${ERROR_MESSAGES.error} ` + message);
    }
  }

  // 구매가격 유효성
  static validateNumberType(number) {
    this.errorCondition(!/^[1-9]\d*$/.test(number), ERROR_MESSAGES.isNumeric);
  }

  static priceUnitCheck(strPrice) {
    const price = parseInt(strPrice, 10);
    const priceUnit = price % INIT.priceUnit === 0;
    this.errorCondition(!priceUnit, ERROR_MESSAGES.priceUnit);
  }

  static ValidPurchaseAmount(inputPrice) {
    this.validateNumberType(inputPrice);
    this.priceUnitCheck(inputPrice);
  }

  // 당첨번호 유효성
  static setNumber(numbers) {
    const setSize = new Set(numbers).size !== INIT.validNumber.count;
    this.errorCondition(setSize, ERROR_MESSAGES.nonDuplicateNumber);
  }

  static lengthCheck(numbers, length) {
    const setlength = numbers.length !== length;
    this.errorCondition(setlength, ERROR_MESSAGES.lengthError(length));
  }

  static isValidNumber(num) {
    const numberCondition = Number.isInteger(num) && num >= INIT.validNumber.min && num <= INIT.validNumber.max;
    // this.errorCondition(!numberCondition, ERROR_MESSAGES.invalidNumber);
    return numberCondition;
  }

  static numberCheck(numbers) {
    const checkNum = numbers.every(number => this.isValidNumber(number));
    this.errorCondition(!checkNum, ERROR_MESSAGES.invalidNumber);
  }

  static ValidLuckyNumber(inputNumbers) {
    const convertedToArrayType = inputNumbers.split(',').map(Number);
    this.lengthCheck(convertedToArrayType, INIT.validNumber.count);
    this.setNumber(convertedToArrayType);
    this.numberCheck(convertedToArrayType);
  }

  // 보너스 유효성

  static ValidBonusNumber(inputNumber) {
    const convertedToArrayType = inputNumber.split(',');
    this.lengthCheck(convertedToArrayType, INIT.validNumber.min);
    const convertedToNumberType = parseInt(inputNumber, 10);
    this.errorCondition(!this.isValidNumber(convertedToNumberType), ERROR_MESSAGES.invalidNumber);
  }
}

export default InputValidator;
