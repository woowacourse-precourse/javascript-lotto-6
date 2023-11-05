import AppError from '../errors/error.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import { isValidNumber } from './index.js';

class ExceptionHandler {
  static throwAppError(message) {
    throw new AppError(message);
  }

  static validateAmount(amount) {
    const numericPattern = LOTTO.regexPatterns.numericPattern;
    if (!numericPattern.test(amount)) {
      this.throwAppError(ERROR.message.invalidPurchase);
    }

    const parsedAmount = amount;
    if (parsedAmount % LOTTO.unit.value) {
      this.throwAppError(ERROR.message.invalidUnit);
    }

    return parsedAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    // 3.1 winningNumbers
    const splitedWinningNumbers = winningNumbers.split(LOTTO.string.comma);
    const winningNumbersSet = new Set(splitedWinningNumbers.map(Number));
    const hasWhiteSpace = LOTTO.regexPatterns.whitespace.test(splitedWinningNumbers);

    // 3.1.1 (예외) 6개 이하
    if (splitedWinningNumbers.length !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }

    // 3.1.2 (예외) 빈 문자열
    if (hasWhiteSpace) {
      throw new AppError(ERROR.message.invalidInput);
    }

    // 3.1.3 (예외) 중복인 경우
    if (winningNumbersSet.size !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }

    // 3.1.4 (예외) 1~45 사이

    if (![...winningNumbersSet].every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }

    // // 3.1.5 (예외) ,, 이 중복으로 들어간 경우 : 1,2,,3,4,5 -> 0으로 처리함
    if (winningNumbersSet.has(LOTTO.number.zero)) {
      throw new AppError(ERROR.message.noZero);
    }

    return winningNumbers;
  }

  static validateBonusNumber(inputbonusNumber, winningNumbers) {
    const splitedWinningNumbers = winningNumbers.split(LOTTO.string.comma);
    const winningNumbersSet = new Set(splitedWinningNumbers.map(Number));
    const bonusNumber = Number(inputbonusNumber);

    // comma, ' ' 를 포함하는 경우
    if (
      inputbonusNumber.includes(LOTTO.string.comma) ||
      inputbonusNumber.includes(LOTTO.string.space)
    ) {
      throw new AppError(ERROR.message.invalidInput);
    }

    // 숫자가 아니거나 범위를 벗어나는지 확인
    if (!isValidNumber(bonusNumber)) {
      throw new Error(ERROR.message.invalidNumberRange);
    }

    // 3.2.2 보너스 번호와 당첨 번호 중복
    if (winningNumbersSet.has(bonusNumber)) {
      throw new AppError(ERROR.message.duplicateBonusNumber);
    }

    return bonusNumber;
  }
}

export default ExceptionHandler;
