import SETTING from "../Constructor/Setting.js";
import ERROR_MESSAGE from "../Constructor/ErrorMessage.js";
import {
  IsNumber,
  IsNumberInRangeOfArray,
  IsNumbersInArray,
  IsUniqueInArray,
} from "../Utils.js";

export const validateMoneyReceived = (money) => {
  if (!IsNumber(money)) {
    throw new Error(ERROR_MESSAGE.MONEY.NUMBERS_NOT_ALL_NUMBERS(money));
  }
  if (money % SETTING.LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.MONEY.UNIT);
  }
};
export const validateWinningNumbersCountMismatch = (winningNumbers) => {
  if (winningNumbers.length !== SETTING.LOTTO_NUMBER_COUNT) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.NUMBERS_COUNT_MISMATCH);
  }
};

export const validateWinningNumbersNotAllNumbers = (winningNumbers) => {
  if (!IsNumbersInArray(winningNumbers)) {
    throw new Error(
      ERROR_MESSAGE.WINNING_NUMBERS.NUMBERS_NOT_ALL_NUMBERS(winningNumbers)
    );
  }
};

export const validateWinningBonusNumberNotNumbers = (bonusNumber) => {
  if (!IsNumber(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.BONUS_NUMBER_NOT_NUMBER);
  }
};

export const validateWinningNumbersOutOfRange = (numbers) => {
  if (
    !IsNumberInRangeOfArray(
      numbers,
      SETTING.LOTTO_NUMBER_RANGE.MIN,
      SETTING.LOTTO_NUMBER_RANGE.MAX
    )
  ) {
    throw new Error(
      ERROR_MESSAGE.WINNING_NUMBERS.NUMBERS_OUT_OF_RANGE(numbers)
    );
  }
};

export const validateWinningNumberIsUniq = (numbers) => {
  if (!IsUniqueInArray(numbers)) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBERS.NUMBERS_DUPLICATED);
  }
};
