import CONSTANTS from './Constants.js';
import ERROR_MESSAGES from './ErrorMessages.js';

const Validator = {
  validatePurchaseAmount(purchaseAmount) {
    if (
      !purchaseAmount % CONSTANTS.eachLottoPrice === 0
      || !purchaseAmount / CONSTANTS.eachLottoPrice >= 1
    ) {
      throw new Error(ERROR_MESSAGES.invalidLottoPrice);
    }
  },
};

export default Validator;
