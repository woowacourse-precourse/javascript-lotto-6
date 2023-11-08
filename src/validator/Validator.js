import {
  COMMON_ERROR_MESSAGE,
  PURCHASE_AMOUNT_ERROR_MESSAGE,
  UNIT,
  TOTAL_LOTTO_NUMBERS,
  BONUS_NUMBER_ERROR_MESSAGE,
  WINNING_NUMBERS_ERROR_MESSAGE
} from '../constants/constants.js';
import CustomError from '../view/CustomError.js';

class Validator {
  static isMoneyValid(input) {
    const NUMERIC_MONEY = Number(input);

    if (isNaN(NUMERIC_MONEY)) {
      throw new CustomError(COMMON_ERROR_MESSAGE.onlyNumber);
    }

    if (NUMERIC_MONEY < UNIT) {
      throw new CustomError(PURCHASE_AMOUNT_ERROR_MESSAGE.underThousand);
    }

    if (NUMERIC_MONEY % UNIT) {
      throw new CustomError(PURCHASE_AMOUNT_ERROR_MESSAGE.wrongUnit);
    }
  }

  isNotNumber(numbers) {
    numbers.forEach((num) => {
      if (!sNaN(num)) {
        return true;
      }
    });
    return false;
  }

  static isNumbersValid(input) {
    const WINNINGS = String(input).split(',').map(Number);
    const MY_NUMBERS = WINNINGS.sort((a, b) => a - b).join('');
    const REMOVE_DUPLICATE_NUMBERS = [...new Set(WINNINGS)]
      .sort((a, b) => a - b)
      .join('');
    const FILTERED_NUMBERS = WINNINGS.filter((num) => num < 1 || num > 45);
    const FILTER_STRINGS = WINNINGS.filter((num) => isNaN(num));

    if (FILTER_STRINGS.length > 0) {
      throw new CustomError(COMMON_ERROR_MESSAGE.emptyString);
    }

    if (WINNINGS.length > TOTAL_LOTTO_NUMBERS) {
      throw new CustomError(
        `${WINNING_NUMBERS_ERROR_MESSAGE.wrongWinningNumber} 게임을 종료합니다.`
      );
    }

    if (WINNINGS.length < TOTAL_LOTTO_NUMBERS - 1) {
      throw new CustomError(
        `${WINNING_NUMBERS_ERROR_MESSAGE.wrongWinningNumber} 게임을 종료합니다.`
      );
    }

    if (MY_NUMBERS !== REMOVE_DUPLICATE_NUMBERS) {
      throw new CustomError(
        `${COMMON_ERROR_MESSAGE.detectedDuplicate} 게임을 종료합니다.`
      );
    }

    if (FILTERED_NUMBERS.length) {
      throw new CustomError(COMMON_ERROR_MESSAGE.wrongRange);
    }
  }

  static isBonusNumberValid(bonusNumber, winningNumbers) {
    const WINNINGS =
      typeof winningNumbers === 'string'
        ? winningNumbers.split(',').map(Number)
        : winningNumbers.map(Number);
    const NUMERIC_NUMBER = Number(bonusNumber);

    if (isNaN(bonusNumber)) {
      throw new CustomError(COMMON_ERROR_MESSAGE.onlyNumber);
    }

    if (NUMERIC_NUMBER === 0) {
      throw new CustomError(BONUS_NUMBER_ERROR_MESSAGE.underZero);
    }

    if (NUMERIC_NUMBER < 1 || NUMERIC_NUMBER > 45) {
      throw new CustomError(COMMON_ERROR_MESSAGE.wrongRange);
    }

    if (WINNINGS.includes(NUMERIC_NUMBER)) {
      throw new CustomError(
        BONUS_NUMBER_ERROR_MESSAGE.duplicatedNumberWithWinningNumbers
      );
    }
  }
}

export default Validator;
