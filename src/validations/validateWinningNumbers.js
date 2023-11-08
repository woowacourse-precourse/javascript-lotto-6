import { ERROR_MESSAGES } from '../constants/messages.js';
import LOTTO_CONSTANT_NUMBER from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';

const validateWinningNumbers = (winningNumbers) => {
  let flag =
    checkInteger(winningNumbers) && checkDuplicate(winningNumbers) && checkLength(winningNumbers) && checkMax(winningNumbers) && checkMin(winningNumbers);

  return flag;
};

export default validateWinningNumbers;

const checkInteger = (winningNumbers) => {
  const integerFlag = winningNumbers.every((number) => Number.isInteger(number));
  if (!integerFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersType);

  return true;
};

const checkDuplicate = (winningNumbers) => {
  const duplicateFlag = new Set(winningNumbers).size !== winningNumbers.length;
  if (duplicateFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);

  return true;
};

const checkLength = (winningNumbers) => {
  const lengthFlag = winningNumbers.length !== LOTTO_CONSTANT_NUMBER.winningNumbersLength;
  if (lengthFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersLength);

  return true;
};

const checkMin = (winningNumbers) => {
  const minFlag = winningNumbers.every((number) => number >= LOTTO_CONSTANT_NUMBER.min);
  if (!minFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);

  return true;
};

const checkMax = (winningNumbers) => {
  const maxFlag = winningNumbers.every((number) => number <= LOTTO_CONSTANT_NUMBER.max);
  if (!maxFlag) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);

  return true;
};
