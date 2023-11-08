import { LOTTO_PRICE, ERROR } from '../../constants/constants.js';

const ensureIsNumberString = number => {
  const trimmed = number.trim();
  const parsed = parseInt(trimmed, 10);

  if (trimmed === '' || Number.isNaN(parsed) || trimmed !== parsed.toString()) throw new Error(ERROR.notNumber);
};

const validateLottoPurchase = inputPrice => {
  const parsed = parseInt(inputPrice, 10);

  if (parsed % LOTTO_PRICE !== 0) {
    throw new Error(ERROR.notThousandWon);
  }
};

const ensureBonusNumberIsNotIncluded = (lottoNumbers, bonusNumber) => {
  if (lottoNumbers.includes(bonusNumber)) {
    throw new Error(ERROR.includedBonusNumber);
  }
};

const validateAndEnsurePrice = inputPrice => {
  ensureIsNumberString(inputPrice);
  validateLottoPurchase(inputPrice);
};

export { ensureIsNumberString, ensureBonusNumberIsNotIncluded, validateAndEnsurePrice, validateLottoPurchase };
