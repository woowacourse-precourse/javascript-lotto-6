import { LOTTO_PRICE, ZERO } from '../constants/lotto/numbers';
import ValidationError from '../error/Validation';
import validationUtils from '../services/utils/validation';
import Lotto from './Lotto';

const ERROR_PURCHASE_AMOUNT_ZERO = `[ERROR] Amount is zero or not divisible by ${LOTTO_PRICE}`;

/**
 * 금액이 0 또는 1000으로 나누어 떨어지는지 확인
 * @param {number} purchaseAmount
 */
export const isDivisibleByLottoPrice = (purchaseAmount) => {
  if (purchaseAmount === ZERO || purchaseAmount % LOTTO_PRICE !== ZERO) {
    throw new ValidationError(`${ERROR_PURCHASE_AMOUNT_ZERO}`);
  }
};

const shop = {
  /**
   * 로또 구입금액을 입력받아 구입 가능한 개수만큼 생성하여 반환합니다
   * @param {number} purchaseAmount
   * @returns {number[]}
   */
  lotterySales: (purchaseAmount) => {
    validationUtils.isInteger(purchaseAmount);
    isDivisibleByLottoPrice(purchaseAmount);
    const count = purchaseAmount / LOTTO_PRICE;
    const lottos = [];
    while (lottos.length !== count) {
      lottos.push(new Lotto(Lotto.drawLottoNumbers()));
    }
    return lottos;
  },
};

export default shop;
