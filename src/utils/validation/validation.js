import { LOTTO_PRICE, ERROR } from '../../constants/constants.js';

const validateNumber = number => {
  const trimmed = number.trim();
  const parsed = parseInt(trimmed, 10);

  if (trimmed === '' || Number.isNaN(parsed)) throw new Error(ERROR.notNumber);
  if (trimmed !== parsed.toString()) throw new Error(ERROR.notThousandWon);
};

const isValidatedPrice = inputPrice => {
  const parsed = parseInt(inputPrice, 10);

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

export { validateNumber, isIncludedBonusNumbers, validatedPrice };
