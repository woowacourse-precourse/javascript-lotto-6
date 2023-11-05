import { ERROR_MESSAGES } from '../constants/messages.js';
import CustomError from '../errors/CustomError.js';
import CONSTANT_VALIDATE_NUMBER from '../constants/validate.js';

const validateWinningNumbers = (winningNumbers) => {
  checkInteger(winningNumbers);
  checkDuplicate(winningNumbers);
  checkLength(winningNumbers);
  checkMin(winningNumbers);
  checkMax(winningNumbers);
};

const checkLength = (winningNumbers) => {
  if (winningNumbers.length !== CONSTANT_VALIDATE_NUMBER.winningNumbersLength)
    throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersLength);
};

const checkMax = (winningNumbers) => {
  const highFlag = winningNumbers.every((number) => number <= CONSTANT_VALIDATE_NUMBER.max);

  if (!highFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);
};

const checkMin = (winningNumbers) => {
  const lowFlag = winningNumbers.every((number) => number >= CONSTANT_VALIDATE_NUMBER.min);

  if (!lowFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);
};

const checkInteger = (winningNumbers) => {
  const integerFlag = winningNumbers.every((number) => Number.isInteger(number));

  if (!integerFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersType);
};

const checkDuplicate = (winningNumbers) => {
  const uniqueWinningNumbers = [...new Set(winningNumbers)];
  const duplicateFlag = uniqueWinningNumbers.length !== winningNumbers.length;

  if (duplicateFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);
};

export default validateWinningNumbers;
