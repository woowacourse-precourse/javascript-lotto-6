import lottoPurchase from '../../domain/lottoPurchase/lottoPurchase.module.js';
import { startValidation } from '../utils/startValidation.js';

/**
 * @module purchasedLottoAmountValidation
 * 로또 구매 금액에 대한 유효성 검사를 수행하는 모듈
 */
const purchasedLottoAmountValidation = Object.freeze({
  /**
   * @type {import('../../utils/jsDoc.js').PurchasedLottoAmountValidationTypes}
   */
  validationTypes: Object.freeze({
    amountRange: Object.freeze({
      errorMessage: `구매 로또 금액은 ${lottoPurchase.constants.minAmount} ~ ${lottoPurchase.constants.maxAmount}원 사이로 입력해주세요.`,
      isValid(purchasedLottoAmount) {
        const { minAmount, maxAmount } = lottoPurchase.constants;
        return purchasedLottoAmount >= minAmount && purchasedLottoAmount <= maxAmount;
      },
    }),

    lottoUnit: Object.freeze({
      errorMessage: `구매 로또 금액은 ${lottoPurchase.constants.unit}원 단위로 입력해야 합니다.`,
      isValid(purchasedLottoAmount) {
        return purchasedLottoAmount % lottoPurchase.constants.unit === 0;
      },
    }),
  }),

  /**
   * @param {number} purchasedLottoAmount - 로또 구매 금액
   * @throws {import('../../error/AppError/AppError.module.js').default} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  check(purchasedLottoAmount) {
    startValidation(this.validationTypes, purchasedLottoAmount);
  },
});

export default purchasedLottoAmountValidation;
