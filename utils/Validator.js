import CONSTANTS from './Constants.js';
import ERROR_MESSAGES from './ErrorMessages.js';
import errorHandle from './errorHandle.js';

const Validator = {
  validatePurchaseAmount(purchaseAmount) {
    if (
      purchaseAmount % CONSTANTS.eachLottoPrice !== 0 ||
      purchaseAmount / CONSTANTS.eachLottoPrice < 1
    ) {
      return errorHandle(ERROR_MESSAGES.invalidLottoPrice);
    }
    return true;
  },
};

export default Validator;
