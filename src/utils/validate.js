import checkNumbersRange from './checkNumbersRange.js';
import isDuplicateNumbers from './isDuplicateNumbers.js';
import {
  LOTTO_RANGE_REGEX,
  AMOUNT_ERROR_MESSAGE,
  WINNING_NUMBERS_ERROR_MESSAGE,
  BONUS_NUMBER_ERROR_MESSAGE,
} from '../constants.js';

export function validateAmount(amount) {
  if (/\D/.test(amount)) {
    throw new Error(AMOUNT_ERROR_MESSAGE.form);
  } else if (amount < 1000) {
    throw new Error(AMOUNT_ERROR_MESSAGE.range);
  } else if (amount % 1000 !== 0) {
    throw new Error(AMOUNT_ERROR_MESSAGE.unit);
  }
}

export function validateWinningNumbers(winningNumbers) {
  if (!checkNumbersRange(winningNumbers)) {
    throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.range);
  } else if (winningNumbers.length !== 6) {
    throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.length);
  } else if (isDuplicateNumbers(winningNumbers)) {
    throw new Error(WINNING_NUMBERS_ERROR_MESSAGE.duplicate);
  }
}

export function validateBonusNumber(winningNumbers, bonusNumber) {
  if (!LOTTO_RANGE_REGEX.test(bonusNumber)) {
    throw new Error(BONUS_NUMBER_ERROR_MESSAGE.range);
  } else if (winningNumbers.includes(bonusNumber)) {
    throw new Error(BONUS_NUMBER_ERROR_MESSAGE.duplicate);
  }
}
