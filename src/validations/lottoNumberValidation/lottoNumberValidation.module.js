import { LOTTO_RULES } from '../../constants/lottoGame.js';
import { startValidation } from '../utils/startValidation.js';

/**
 * @module lottoNumberValidation
 * 로또 번호에 대한 유효성 검사를 수행하는 모듈
 */
const lottoNumberValidation = Object.freeze({
  /**
   * @type {import('../../utils/jsDoc.js').LottoNumberValidationTypes}
   */
  validationTypes: Object.freeze({
    lottoNumberRange: Object.freeze({
      isValid(lottoNumbers) {
        return lottoNumbers.every(
          (lottoNumber) =>
            lottoNumber >= LOTTO_RULES.minNumber && lottoNumber <= LOTTO_RULES.maxNumber,
        );
      },
      errorMessage: `로또 번호의 범위는 ${LOTTO_RULES.minNumber} ~ ${LOTTO_RULES.maxNumber}이여야 합니다.`,
    }),

    lottoSize: Object.freeze({
      isValid(lottoNumbers) {
        return lottoNumbers.length === LOTTO_RULES.size;
      },
      errorMessage: `로또 번호가 ${LOTTO_RULES.size}개여야 합니다.`,
    }),

    duplicateNumber: Object.freeze({
      isValid(lottoNumbers) {
        return new Set(lottoNumbers).size === lottoNumbers.length;
      },
      errorMessage: '중복된 로또 번호가 존재합니다.',
    }),
  }),

  /**
   * @param {number[]} lottoNumbers - 로또 번호들이 있는 숫자 배열
   * @throws {import('../../error/AppError/AppError.module.js').default} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  check(lottoNumbers) {
    startValidation(this.validationTypes, lottoNumbers);
  },
});

export default lottoNumberValidation;
