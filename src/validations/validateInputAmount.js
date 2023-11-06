import { ERROR_MESSAGES } from '../constants/messages.js';
import CONSTANT_VALIDATE_NUMBER from '../constants/validate.js';
import CustomError from '../errors/CustomError.js';

const validateInputAmount = (inputAmount) => {
  if (!Number.isInteger(inputAmount)) throw new CustomError(ERROR_MESSAGES.inputAmount.type);

  if (inputAmount < CONSTANT_VALIDATE_NUMBER.thousand) throw new CustomError(ERROR_MESSAGES.inputAmount.min);

  if (inputAmount > CONSTANT_VALIDATE_NUMBER.hundredThousand) throw new CustomError(ERROR_MESSAGES.inputAmount.max);

  if (inputAmount % CONSTANT_VALIDATE_NUMBER.zero) throw new CustomError(ERROR_MESSAGES.inputAmount.unit);

  return true;
};

export default validateInputAmount;
