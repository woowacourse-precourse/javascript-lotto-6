import { LOTTO_RULES } from '../../constants/lottoGame.js';
import AppError from '../../error/AppError/AppError.module.js';

/**
 * @type {import('../../utils/jsDoc.js').LottoNumberValidationTypes}
 */
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

/**
 * @param {number[]} lottoNumbers - 로또 번호들이 있는 숫자 배열
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validateLottoNumber = (lottoNumbers) => {
  Object.values(LOTTO_NUMBER_VALIDATION_TYPES).forEach(({ isValid, errorMessage }) => {
    if (!isValid(lottoNumbers)) {
      throw new AppError(errorMessage);
    }
  });
};
