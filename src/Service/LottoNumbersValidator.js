import {
  LOTTO_NUMBERS_ERROR_MESSAGES,
  LOTTO_NUMBERS_LENGTH,
} from '../Constant/Constants.js';
import { isArrayType, isAllNumeric, isOutOfRange } from './Common.js';

class LottoNumbersValidator {
  validateLottoNumbers(lottoNumbers) {
    this.validateGeneratedLottoNumbers(lottoNumbers);
    this.validateNumbers(lottoNumbers);
    this.validateLottoNumbersLength(lottoNumbers);
    this.validateLottoNumbersInRange(lottoNumbers);
    this.validateNumbersDuplicated(lottoNumbers);
    return true;
  }

  validateGeneratedLottoNumbers(lottoNumbers) {
    if (!isArrayType(lottoNumbers)) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_GENERATED);
    }
  }

  validateNumbers(lottoNumbers) {
    if (!isAllNumeric(lottoNumbers)) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.NOT_NUMERIC);
    }
  }

  validateLottoNumbersLength(lottoNumbers) {
    if (lottoNumbers.length !== LOTTO_NUMBERS_LENGTH) {
      throw new Error(
        LOTTO_NUMBERS_ERROR_MESSAGES.INVALID_LOTTO_NUMBERS_LENGTH
      );
    }
  }

  validateLottoNumbersInRange(lottoNumbers) {
    if (lottoNumbers.some((number) => isOutOfRange(number))) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  validateNumbersDuplicated(lottoNumbers) {
    const lottoNumbersNotDuplicated = new Set(lottoNumbers);
    if (lottoNumbersNotDuplicated.size !== LOTTO_NUMBERS_LENGTH) {
      throw new Error(LOTTO_NUMBERS_ERROR_MESSAGES.DUPLICATED);
    }
  }
}

export default LottoNumbersValidator;
