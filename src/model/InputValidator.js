import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES, INIT } from '../constants/messages.js';

class InputValidator {
  static errorCondition(condition, message) {
    if (condition) {
      throw new Error(message);
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

  static lengthCheck(numbers) {
    const setlength = numbers.length !== INIT.validNumber.count;
    this.errorCondition(setlength, ERROR_MESSAGES.lengthError);
  }

  static isValidNumber(num) {
    const numberCondition = Number.isInteger(num) && num >= INIT.validNumber.min && num <= INIT.validNumber.max;
    this.errorCondition(!numberCondition, ERROR_MESSAGES.invalidNumber);
  }

  static numberCheck(numbers) {
    const checkNum = numbers.every(num => this.isValidNumber(num));
    this.errorCondition(!checkNum, ERROR_MESSAGES.invalidNumber);
  }

  static ValidLuckyNumber(inputNumbers) {
    const convertedToArrayType = inputNumbers.split(',').map(Number);
    this.lengthCheck(convertedToArrayType);
    this.setNumber(convertedToArrayType);
    this.numberCheck(convertedToArrayType);
  }
}

export default InputValidator;
