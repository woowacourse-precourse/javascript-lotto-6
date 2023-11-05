import { ERROR_MESSAGES } from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

const THOUSAND = 1000;

const validateInputAmount = (inputAmount) => {
  if (!Number.isInteger(inputAmount)) {
    Console.print(ERROR_MESSAGES.inputAmount.type);
    return false;
  }

  if (inputAmount < THOUSAND) {
    Console.print(ERROR_MESSAGES.inputAmount.min);
    return false;
  }
  if (inputAmount > THOUSAND * 100) {
    Console.print(ERROR_MESSAGES.inputAmount.max);
    return false;
  }

  if (inputAmount % THOUSAND != 0) {
    Console.print(ERROR_MESSAGES.inputAmount.unit);
    return false;
  }

  return true;
};

export default validateInputAmount;
