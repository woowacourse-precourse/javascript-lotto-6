import { LOTTO_RULES } from '../../constants/lottoGame.js';
import { startValidation } from '../utils/startValidation.js';

/**
 * @module bonusNumberValidation
 * 보너스 번호에 대한 유효성 검사를 수행하는 모듈
 */
const bonusNumberValidation = Object.freeze({
  /**
   * @type {import('../../utils/jsDoc.js').BonusNumberValidationType}
   */
  validationTypes: Object.freeze({
    bonusNumberRange: Object.freeze({
      errorMessage: `보너스 번호의 범위는 ${LOTTO_RULES.minNumber} ~ ${LOTTO_RULES.maxNumber}이여야 합니다.`,
      isValid({ bonusNumber }) {
        return bonusNumber >= LOTTO_RULES.minNumber && bonusNumber <= LOTTO_RULES.maxNumber;
      },
    }),

    duplicateBonusNumber: Object.freeze({
      errorMessage: '당첨 번호와 보너스 번호가 서로 중복되는 번호가 있습니다.',
      isValid({ bonusNumber, winningLottoNumber }) {
        return !winningLottoNumber.includes(bonusNumber);
      },
    }),
  }),

  /**
   * @param {import('../../utils/jsDoc.js').WinningLottoInfo} winningLottoInfo - 보너스 번호와 당첨 번호가 있는 객체
   * @throws {import('../../error/AppError/AppError.module.js').default} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  check(winningLottoInfo) {
    startValidation(this.validationTypes, winningLottoInfo);
  },
});

export default bonusNumberValidation;
