import { LOTTO_RULES } from '../constants/lottoGame.js';
import AppError from '../error/customErrors/AppError.js';

export const LOTTO_NUMBER_VALIDATION_TYPES = {
  lottoNumberRange: {
    isValid(lottoNumbers) {
      return lottoNumbers.every(
        (lottoNumber) =>
          lottoNumber >= LOTTO_RULES.minNumber && lottoNumber <= LOTTO_RULES.maxNumber,
      );
    },
    errorMessage: `로또 번호의 범위는 ${LOTTO_RULES.minNumber} ~ ${LOTTO_RULES.maxNumber}이여야 합니다.`,
  },

  lottoSize: {
    isValid(lottoNumbers) {
      return lottoNumbers.length === LOTTO_RULES.size;
    },
    errorMessage: `로또 번호가 ${LOTTO_RULES.size}개여야 합니다.`,
  },

  duplicateNumber: {
    isValid(lottoNumbers) {
      return new Set(lottoNumbers).size === lottoNumbers.length;
    },
    errorMessage: '중복된 로또 번호가 존재합니다.',
  },
};

export const validateLottoNumber = (lottoNumbers) => {
  Object.values(LOTTO_NUMBER_VALIDATION_TYPES).forEach(({ isValid, errorMessage }) => {
    if (!isValid(lottoNumbers)) {
      throw new AppError(errorMessage);
    }
  });
};
