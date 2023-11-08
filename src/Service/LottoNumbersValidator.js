import {
  LOTTO_NUMBERS_ERROR_MESSAGES,
  LOTTO_NUMBERS_LENGTH,
} from '../Constants.js';
import { isArrayType, isAllNumeric } from './Common.js';

class LottoNumbersValidator {
  validateLottoNumbers(lottoNumbers) {
    this.validateGeneratedLottoNumbers(lottoNumbers);
    this.validateNumbers(lottoNumbers);
    this.validateLottoNumbersLength(lottoNumbers);
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

  validateLottoNumbersLength(lottoNumbers) {
    if (lottoNumbers !== LOTTO_NUMBERS_LENGTH) {
      throw new Error(
        LOTTO_NUMBERS_ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_LENGTH
      );
    }
  }
}

export default LottoNumbersValidator;
