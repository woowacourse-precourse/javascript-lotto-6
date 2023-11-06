import { ERROR_MSG } from './Constants.js';

const winningNumbersSameCheck = (numbers) => {
  const set = new Set(numbers);
  if (set.size !== numbers.length) {
    return true;
  }
  return false;
};

const winningNumbersCheck = (numbers) => {
  if (
    numbers.every(
      (number) =>
        !Number.isNaN(parseInt(number, 10)) &&
        !Number.isInteger(parseInt(number, 10))
    )
  ) {
    return false;
  }
  return true;
};
// 중복검사 + 양의 정수 검사
const invalidInputNumbers = (numbers) => {
  if (!winningNumbersCheck(numbers) && winningNumbersSameCheck(numbers)) {
    return true;
  }
  return false;
};

export const validateMoney = (money) => {
  if (!/^\d+$/.test(money)) {
    throw new Error(ERROR_MSG.IS_NOT_NUMBER);
  }
  if (parseInt(money, 10) % 1000 !== 0) {
    throw new Error(ERROR_MSG.CAN_NOT_DIVIDE);
  }
};

export const validateWinningNumbers = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error(ERROR_MSG.INVALID_NUMBERS_LENGTH);
  }
  if (invalidInputNumbers(winningNumbers)) {
    throw new Error(ERROR_MSG.INVALID_NUMBER);
  }
};
//
export const validateBonusNumber = (bonusNumber) => {
  const convertedBonusNumber = parseInt(bonusNumber, 10);
  if (bonusNumber.length > 2) {
    throw new Error(ERROR_MSG.INVALID_BONUS_NUMBER);
  }
  if (!/^\d+$/.test(bonusNumber)) {
    throw new Error(ERROR_MSG.IS_NOT_NUMBER);
  }
  if (convertedBonusNumber <= 0 || !Number.isInteger(convertedBonusNumber)) {
    throw new Error(ERROR_MSG.INVALID_NUMBER);
  }
};
