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

  validateLottoNumbers(lottoNumbersArray) {
    if (new Set(lottoNumbersArray).size !== 6) return false;
    if (
      lottoNumbersArray.some(
        (lottoNumber) =>
          lottoNumber > CONSTANTS.maximumNumber ||
          lottoNumber < CONSTANTS.minimumNumber ||
          !Number.isSafeInteger(lottoNumber),
      )
    ) {
      return false;
    }
    return true;
  },

  validateGeneratedLotto(lottoNumbersArray) {
    if (!this.validateLottoNumbers(lottoNumbersArray))
      throw new Error(ERROR_MESSAGES.invalidLottoNumber);
  },
};

export default Validator;
