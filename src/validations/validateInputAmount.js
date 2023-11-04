import CustomError from '../errors/CustomError.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const THOUSAND = 1000;

const validateInputAmount = (inputAmount) => {
  if (!Number.isInteger(inputAmount)) throw new CustomError(ERROR_MESSAGES.inputAmount.type);

  if (inputAmount < THOUSAND) throw new CustomError(ERROR_MESSAGES.inputAmount.low);
  if (inputAmount > THOUSAND * 100) throw new CustomError(ERROR_MESSAGES.inputAmount.high);

  if (inputAmount % THOUSAND != 0) throw new CustomError(ERROR_MESSAGES.inputAmount.unit);
};

export default validateInputAmount;
