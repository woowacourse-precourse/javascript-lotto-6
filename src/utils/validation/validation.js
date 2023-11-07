import { LOTTO_PRICE, ERROR } from '../../constants/constants.js';

const trimmedNumber = number => {
  return number.trim();
};

const parsedNumber = number => {
  return parseInt(trimmedNumber(number), 10);
};

const validateNumber = number => {
  const trimmed = trimmedNumber(number);
  const parsed = parsedNumber(number);

  if (trimmed === '' || Number.isNaN(parsed)) throw new Error(ERROR.notNumber);
  if (trimmed !== parsed.toString()) throw new Error(ERROR.notThousandWon);
};

const isValidatedPrice = inputPrice => {
  const parsed = parsedNumber(inputPrice);

  if (parsed % LOTTO_PRICE !== 0) {
    throw new Error(ERROR.notThousandWon);
  }
};

const isIncludedBonusNumbers = (lottoNumbers, bonusNumber) => {
  if (lottoNumbers.includes(bonusNumber)) {
    throw new Error(ERROR.includedBonusNumber);
  }
};

const validatedPrice = inputPrice => {
  validateNumber(inputPrice);
  isValidatedPrice(inputPrice);
};

export { validateNumber, isIncludedBonusNumbers, validatedPrice, parsedNumber };
