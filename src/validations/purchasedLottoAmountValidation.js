import { LOTTO_GAME_TERMS } from '../constants/lottoGame.js';
import AppError from '../error/customErrors/AppError.js';

/**
 * @type {import('../utils/jsDoc.js').PurchasedLottoAmountValidationTypes}
 */
export const PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES = Object.freeze({
  amountRange: Object.freeze({
    errorMessage: `구매 로또 금액은 ${LOTTO_GAME_TERMS.purchasedLottoPrice.minRange} ~ ${LOTTO_GAME_TERMS.purchasedLottoPrice.maxRange}원 사이로 입력해주세요.`,
    isValid(purchasedLottoAmount) {
      const { minRange, maxRange } = LOTTO_GAME_TERMS.purchasedLottoPrice;
      return purchasedLottoAmount >= minRange && purchasedLottoAmount <= maxRange;
    },
  }),
  lottoUnit: Object.freeze({
    errorMessage: `구매 로또 금액은 ${LOTTO_GAME_TERMS.purchasedLottoPrice.unit}원 단위로 입력해야 합니다.`,
    isValid(purchasedLottoAmount) {
      return purchasedLottoAmount % LOTTO_GAME_TERMS.purchasedLottoPrice.unit === 0;
    },
  }),
});

/**
 * @param {number} purchasedLottoAmount - 로또 구매 금액
 * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
 * @returns {void}
 */
export const validatePurchasedLottoAmount = (purchasedLottoAmount) => {
  Object.values(PURCHASED_LOTTO_AMOUNT_VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
    if (!isValid(purchasedLottoAmount)) throw new AppError(errorMessage);
  });
};
