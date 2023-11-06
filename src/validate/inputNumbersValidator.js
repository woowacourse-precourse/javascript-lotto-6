import { ERROR_MESSAGE } from '../constans/errorMessages'

export const inputNumbersValidator = (lottoNumbers) => {
  const Numbers = lottoNumbers.split(',').map(Number);
  const uniqueNumbers = Array.from(new Set(Numbers));
  const lengthError = Numbers.length !== 6;
  const rangeError = Numbers.some(number => number < 1 || number > 45);
  const overlapError = uniqueNumbers.length !== 6;

  if (lengthError) {
    throw new Error(ERROR_MESSAGE.notLength);
  }
  if (rangeError) {
    throw new Error(ERROR_MESSAGE.notRange);
  }
  if (overlapError) {
    throw new Error(ERROR_MESSAGE.notDouble);
  }
}

