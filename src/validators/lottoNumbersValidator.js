import { ERROR_MESSAGES, LOTTO_RULES } from '../constants/lotto.js';

import InvalidInputException from '../exceptions/InvalidInputError.js';

const validateType = (numbers) => {
  if (!numbers.every((number) => typeof number === 'number' && !Number.isNaN(number))) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidLottoType);
  }
};

const validateCount = (numbers) => {
  if (numbers.length !== LOTTO_RULES.lottoNumberCount) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidLottoCount);
  }
};

const validateRange = (numbers) => {
  if (numbers.some((number) => number < LOTTO_RULES.minLottoNumber || number > LOTTO_RULES.maxLottoNumber)) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidLottoRange);
  }
};

const validateUniqueness = (numbers) => {
  const uniqueNumbers = new Set(numbers);
  if (uniqueNumbers.size !== numbers.length) {
    throw new InvalidInputException(ERROR_MESSAGES.duplicatedWinningNumber);
  }
};

export const lottoNumbersValidator = {
  validateType,
  validateCount,
  validateRange,
  validateUniqueness,
};

export const lottoWinningNumbersValidator = {
  validateType,
  validateCount,
  validateRange,
  validateUniqueness,
};
