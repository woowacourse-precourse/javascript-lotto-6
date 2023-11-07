import { ERROR_MESSAGES, LOTTO_RULES } from '../constants/lotto.js';
import InvalidInputException from '../exceptions/InvalidInputError.js';

const validateType = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidBounsType);
  }
};

const validateRange = (number) => {
  if (number < LOTTO_RULES.minLottoNumber || number > LOTTO_RULES.maxLottoNumber) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidBonusRange);
  }
};

const validateUniqueness = (winningNumbers, number) => {
  if (winningNumbers.includes(number)) {
    throw new InvalidInputException(ERROR_MESSAGES.duplicatedBonusNumber);
  }
};

const bonusNumberValidator = {
  validateType,
  validateRange,
  validateUniqueness,
};

export default bonusNumberValidator;
