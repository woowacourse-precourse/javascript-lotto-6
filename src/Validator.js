import { OTHERS, NUMBER, ERROR_MESSAGE } from './utils/constants.js';

class Validator {
  validateUserInputPurchaseMoney(userInputPurcaseMoney) {
    if (typeof userInputPurcaseMoney !== OTHERS.number) {
      throw new Error(ERROR_MESSAGE.isNotNumber);
    }

    if (userInputPurcaseMoney < 0) {
      throw new Error(ERROR_MESSAGE.negativeNumber);
    }

    if (userInputPurcaseMoney % NUMBER.purchaseMoneyDivisor !== NUMBER.zero) {
      throw new Error(ERROR_MESSAGE.inValidMoneyAmount);
    }

    return true;
  }
}

export default Validator;
