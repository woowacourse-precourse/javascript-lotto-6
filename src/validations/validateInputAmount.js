import LOTTO_CONSTANT_NUMBER from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const validateInputAmount = (inputAmount) => {
  if (!Number.isInteger(inputAmount)) throw new CustomError(ERROR_MESSAGES.inputAmount.type);

  if (inputAmount < LOTTO_CONSTANT_NUMBER.price) throw new CustomError(ERROR_MESSAGES.inputAmount.min);

  if (inputAmount > LOTTO_CONSTANT_NUMBER.hundredPrice) throw new CustomError(ERROR_MESSAGES.inputAmount.max);

  if (inputAmount % LOTTO_CONSTANT_NUMBER.price != LOTTO_CONSTANT_NUMBER.zero) throw new CustomError(ERROR_MESSAGES.inputAmount.unit);

  return true;
};

export default validateInputAmount;
