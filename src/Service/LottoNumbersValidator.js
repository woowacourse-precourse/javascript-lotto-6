import { LOTTO_NUMBERS_ERROR_MESSAGES } from '../Constants.js';
import { isArrayType } from './Common.js';

class LottoNumbersValidator {
  validateLottoNumbers(lottoNumbers) {
    this.validateGeneratedLottoNumbers(lottoNumbers);
    return true;
  }

  validateGeneratedLottoNumbers(lottoNumbers) {
    if (!isArrayType(lottoNumbers)) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_GENERATED);
    }
  }
}

export default LottoNumbersValidator;
