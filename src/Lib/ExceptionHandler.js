import AppError from '../errors/error.js';
import CONSTANTS from './constans.js';
import ERROR from './error.js';
import { isValidNumber } from '../Domain/Lotto/utils.js';

class ExceptionHandler {
  /**
   * 사용자가 입력한 구매 금액을 검증한다.
   *
   * @param {string} amount - 사용자가 입력한 구매 금액
   * @returns {number} 모든 검증을 통과하면 원래의 구매 금액을 숫자로 변환하여 반환.
   * @throws {AppError} 구매 금액 입력이 다음 검증 중 하나라도 통과하지 못하면 오류를 발생시킨다:
   *
   * 1. 입력 값이 숫자가 아니거나, 쉼표가 포함된 경우
   * 2. 입력 값이 1000원 단위가 아니거나, 0으로 시작하는 경우
   * 3. 입력 값이 로또 단위 값으로 나누어 떨어지지 않는 경우
   */
  static validatePurchaseAmount(amount) {
    const numericAmount = Number(amount);

    this.checkIfNotNumberOrIncludesComma(amount, numericAmount);
    this.checkIfLessThanThousand(numericAmount);
    this.checkIfDivisibleBy1000(numericAmount);

    return numericAmount;
  }

  static checkIfNotNumberOrIncludesComma(amount, numericAmount) {
    if (isNaN(numericAmount) || amount.includes(',')) {
      throw new AppError(ERROR.message.invalidPurchase);
    }
  }

  static checkIfLessThanThousand(numericAmount) {
    if (numericAmount < 1000) {
      throw new AppError(ERROR.message.underThousand);
    }
  }

  static checkIfDivisibleBy1000(numericAmount) {
    if (numericAmount % CONSTANTS.unit.value) {
      throw new AppError(ERROR.message.invalidUnit);
    }
  }

  /**
   * 사용자가 입력한 당첨 번호를 검증한다.
   *
   * @param {string} winningNumbers - 사용자가 입력한 당첨 번호
   * @returns {string} 모든 검증을 통과하면 원래의 당첨 번호 문자열을 반환
   * @throws {AppError} 당첨 번호 입력이 다음 검증 중 하나라도 통과하지 못하면 오류를 발생시킵니다:
   *
   * 1. 당첨 번호의 개수는 LOTTO 번호 제한(= 6개)과 일치해야 한다.
   * 2. 당첨 번호에는 공백이 포함되어서는 안된다.
   * 3. 당첨 번호에는 중복된 번호가 포함되어서는 안된다.
   * 4. 각 당첨 번호는 유효한 번호 범위 내에 있어야 한다.
   * 5. 당첨 번호에는 0이 포함되어서는 안된다.
   */
  static validateWinningNumbers(winningNumbers) {
    const splitedWinningNumbers = this.getSplitedWinningNumbers(winningNumbers);
    const winningNumbersSet = this.getWinningNumbersSet(splitedWinningNumbers);

    this.checkNumberLimit(splitedWinningNumbers);
    this.checkWhiteSpace(splitedWinningNumbers);
    this.checkZero(splitedWinningNumbers);
    this.checkDuplicateNumber(winningNumbersSet);
    this.checkNumberRange(winningNumbersSet);

    return winningNumbers;
  }

  static getSplitedWinningNumbers(winningNumbers) {
    return winningNumbers.split(CONSTANTS.string.comma);
  }

  static getWinningNumbersSet(splitedWinningNumbers) {
    return new Set(splitedWinningNumbers.map(Number));
  }

  static checkNumberLimit(splitedWinningNumbers) {
    if (splitedWinningNumbers.length !== CONSTANTS.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }
  }

  static checkWhiteSpace(splitedWinningNumbers) {
    if (CONSTANTS.regexPatterns.whitespace.test(splitedWinningNumbers)) {
      throw new AppError(ERROR.message.invalidInput);
    }
  }

  static checkZero(input) {
    if (Array.isArray(input)) {
      if (input.some((number) => String(number).startsWith('0'))) {
        throw new AppError(ERROR.message.noZero);
      }
    } else if (typeof input === 'string' || typeof input === 'number') {
      if (String(input).startsWith('0')) {
        throw new AppError(ERROR.message.noZero);
      }
    }
  }

  static checkDuplicateNumber(winningNumbersSet) {
    if (winningNumbersSet.size !== CONSTANTS.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  static checkNumberRange(winningNumbersSet) {
    if (![...winningNumbersSet].every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }
  }

  /**
   * 사용자가 입력한 보너스 번호를 검증한다.
   *
   * @param {string} inputbonusNumber - 사용자가 입력한 보너스 번호
   * @param {string} winningNumbers - 사용자가 입력한 당첨 번호
   * @returns {number} 모든 검증을 통과하면 원래의 보너스 번호를 숫자로 변환하여 반환
   * @throws {AppError} 보너스 번호 입력이 다음 검증 중 하나라도 통과하지 못하면 오류를 발생킨다:
   *
   * 1. 입력 값이 숫자가 아니거나, 공백 혹은 쉼표가 입력된 경우
   * 2. 입력 값이 유효한 번호 범위를 벗어난 경우
   * 3. 보너스 번호가 당첨 번호와 중복된 경우
   */
  static validateBonusNumber(inputbonusNumber, winningNumbers) {
    const splitedWinningNumbers = this.getSplitedWinningNumbers(winningNumbers);
    const winningNumbersSet = this.getWinningNumbersSet(splitedWinningNumbers);
    const bonusNumber = Number(inputbonusNumber);

    this.checkInvalidInput(inputbonusNumber);
    this.checkZero(inputbonusNumber);
    this.checkInvalidNumber(bonusNumber);
    this.checkDuplicateBonusNumber(bonusNumber, winningNumbersSet);

    return bonusNumber;
  }

  static checkInvalidInput(inputbonusNumber) {
    if (
      inputbonusNumber.includes(CONSTANTS.string.comma) ||
      inputbonusNumber.includes(CONSTANTS.string.space)
    ) {
      throw new AppError(ERROR.message.invalidInput);
    }
  }

  static checkInvalidNumber(bonusNumber) {
    if (!isValidNumber(bonusNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }
  }

  static checkDuplicateBonusNumber(bonusNumber, winningNumbersSet) {
    if (winningNumbersSet.has(bonusNumber)) {
      throw new AppError(ERROR.message.duplicateBonusNumber);
    }
  }
}

export default ExceptionHandler;
