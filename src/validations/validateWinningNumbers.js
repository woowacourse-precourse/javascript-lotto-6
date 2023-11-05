import { ERROR_MESSAGES } from '../constants/messages.js';
import CONSTANT_VALIDATE_NUMBER from '../constants/validate.js';
import { Console } from '@woowacourse/mission-utils';

const checkInteger = (winningNumbers) => {
  const integerFlag = winningNumbers.every((number) => Number.isInteger(number));
  if (!integerFlag) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersType);
    return false;
  }
  return true;
};

const checkDuplicate = (winningNumbers) => {
  const uniqueWinningNumbers = [...new Set(winningNumbers)];
  const duplicateFlag = uniqueWinningNumbers.length !== winningNumbers.length;

  if (duplicateFlag) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);
    return false;
  }
  return true;
};

const checkLength = (winningNumbers) => {
  if (winningNumbers.length !== CONSTANT_VALIDATE_NUMBER.winningNumbersLength) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.winningNumbersLength);
    return false;
  }
  return true;
};

const checkMin = (winningNumbers) => {
  const minFlag = winningNumbers.every((number) => number >= CONSTANT_VALIDATE_NUMBER.min);
  if (!minFlag) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);
    return false;
  }
  return true;
};

const checkMax = (winningNumbers) => {
  const maxFlag = winningNumbers.every((number) => number <= CONSTANT_VALIDATE_NUMBER.max);
  if (!maxFlag) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);
    return false;
  }
  return true;
};

const validateWinningNumbers = (winningNumbers) => {
  let flag =
    checkInteger(winningNumbers) && checkDuplicate(winningNumbers) && checkLength(winningNumbers) && checkMax(winningNumbers) && checkMin(winningNumbers);

  return flag;
};

export default validateWinningNumbers;
