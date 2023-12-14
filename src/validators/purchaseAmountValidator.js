import { ERROR_MESSAGES } from '../constants/lotto.js';
import InvalidInputException from '../exceptions/InvalidInputError.js';

const validateType = (number) => {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidBuyCountType);
  }
};

const validateDivision = (buyCount, devideNumber) => {
  if (buyCount % devideNumber !== 0) {
    throw new InvalidInputException(ERROR_MESSAGES.invalidBuyCountDivision(devideNumber));
  }
};

const purchaseAmountValidator = {
  validateType,
  validateDivision,
};

export default purchaseAmountValidator;
