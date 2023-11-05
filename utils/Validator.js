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

  /**
   *
   * @param {array} lottoNumbers
   */

  validateLottoNumbers(lottoNumbers) {
    if (new Set(lottoNumbers).size !== 6) throw new Error(ERROR_MESSAGES.invalidLottoNumber);
    if (
      lottoNumbers.some(
        (lottoNumber) =>
          lottoNumber > CONSTANTS.maximumNumber ||
          lottoNumber < CONSTANTS.minimumNumber ||
          !Number.isSafeInteger(lottoNumber),
      )
    )
      throw new Error(ERROR_MESSAGES.invalidLottoNumber);
  },
};

export default Validator;
