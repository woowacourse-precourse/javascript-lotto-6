import { MIN, MAX, UNIT, LOTTO_LENGTH } from './constants.js';
export const isValidAmount = amount => {
  const regex = /^\d+$/;
  const numErr = regex.test(amount);
  const limitErr = amount >= UNIT;
  const remainErr = amount % UNIT === 0;
  return numErr && limitErr && remainErr;
};
export const isValidWinnintNumbers = winningNumbers => {
  const regex = /\d,\d,\d,\d,\d,\d/;
  const winNumsArr = winningNumbers.split(',');
  const strErr = regex.test(winningNumbers);
  const rangeErr =
    winNumsArr.filter(x => x >= MIN && x <= MAX).length === LOTTO_LENGTH;
  const duplicateErr = new Set(winNumsArr).size === LOTTO_LENGTH;
  return strErr && rangeErr && duplicateErr;
};
export const isValidBonusNumber = (winningNumbers, bonusNumber) => {
  const regex = /\d/;
  const numErr = regex.test(bonusNumber);
  const rangeErr = bonusNumber >= MIN && bonusNumber <= MAX;
  const duplicateErr = !winningNumbers.includes(bonusNumber);
  return numErr && rangeErr && duplicateErr;
};
