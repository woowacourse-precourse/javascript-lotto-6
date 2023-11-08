import CONSTANTS from './Constants.js';
import ERROR_MESSAGES from './ErrorMessages.js';
import errorHandle from './errorHandle.js';

const checkNumberInRange = (number) =>
  number > CONSTANTS.maximumNumber ||
  number < CONSTANTS.minimumNumber ||
  !Number.isSafeInteger(number);

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
    if (
      new Set(lottoNumbersArray).size !== 6 ||
      lottoNumbersArray.some((lottoNumber) => checkNumberInRange(lottoNumber))
    ) {
      return errorHandle(ERROR_MESSAGES.invalidLottoNumber);
    }
    return true;
  },

  validateGeneratedLotto(lottoNumbersArray) {
    if (!this.validateLottoNumbers(lottoNumbersArray))
      throw new Error(ERROR_MESSAGES.invalidLottoNumber);
  },

  validateBonusNumber(mainNumber, bonusNumber) {
    if (checkNumberInRange(bonusNumber) || mainNumber.includes(bonusNumber)) {
      return errorHandle(ERROR_MESSAGES.invalidLottoNumber);
    }
    return true;
  },
};

export default Validator;
