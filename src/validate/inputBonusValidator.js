import { ERROR_MESSAGE } from '../constans/errorMessages'

export const inputBonusValidator = (lottoMainNumbers, lottoBonusNumberInput) => {
  const bonusNumber = parseInt(lottoBonusNumberInput);
  const rangeError = bonusNumber < 1 || bonusNumber > 45;
  const overlapError = lottoMainNumbers.includes(bonusNumber);

  if (rangeError) {
    throw new Error(ERROR_MESSAGE.notRange);
  }
  if (overlapError) {
    throw new Error(ERROR_MESSAGE.overlap);
  }
}