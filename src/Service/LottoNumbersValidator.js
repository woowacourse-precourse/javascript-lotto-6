import { LOTTO_NUMBERS_ERROR_MESSAGES } from '../Constants.js';
import { isArrayType, isAllNumeric } from './Common.js';

class LottoNumbersValidator {
  validateLottoNumbers(lottoNumbers) {
    this.validateGeneratedLottoNumbers(lottoNumbers);
    this.validateNumbers(lottoNumbers);
    return true;
  }

  validateGeneratedLottoNumbers(lottoNumbers) {
    if (!isArrayType(lottoNumbers)) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_GENERATED);
    }
  }

  validateNumbers(lottoNumbers) {
    if (!isAllNumeric(lottoNumbers)) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_NUMBER);
    }
  }
}

export default LottoNumbersValidator;
