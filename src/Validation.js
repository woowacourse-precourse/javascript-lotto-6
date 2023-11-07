import { MIN, MAX, UNIT, LOTTO_LENGTH } from './constants.js';
const isValidAmount = amount => {
  const regex = /^\d+$/;
  const numErr = regex.test(amount);
  const limitErr = amount >= UNIT;
  const remainErr = amount % UNIT === 0;
  return numErr && limitErr && remainErr;
};
const isValidWinningNumbers = winningNumbers => {
  const regex = /^(\d{1,2},){5}\d{1,2}$/;
  const winNumsArr = winningNumbers.split(',').map(x => Number(x));
  const strErr = regex.test(winningNumbers);
  const rangeErr =
    winNumsArr.filter(x => x >= MIN && x <= MAX).length === LOTTO_LENGTH;
  const duplicateErr = new Set(winNumsArr).size === LOTTO_LENGTH;
  return strErr && rangeErr && duplicateErr;
};
const isValidBonusNumber = (winningNumbers, bonusNumber) => {
  const regex = /^\d{1,2}$/;
  const numErr = regex.test(bonusNumber);
  const rangeErr = bonusNumber >= MIN && bonusNumber <= MAX;
  const duplicateErr = !winningNumbers.includes(bonusNumber);
  return numErr && rangeErr && duplicateErr;
};
export { isValidAmount, isValidBonusNumber, isValidWinningNumbers };
