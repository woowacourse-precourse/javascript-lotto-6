import { MissionUtils } from '@woowacourse/mission-utils';
import validationUtils from '../services/utils/validation';
import Lotto from '../Lotto';
import { ZERO } from '../constants/validate';
import { LOTTO_PRICE, PICK_NUMBERS, RANGE } from '../constants/lotto';

const ERROR_PURCHASE_AMOUNT_ZERO = `[ERROR] Amount is zero or not divisible by ${LOTTO_PRICE}`;

/**
 * 금액이 0 또는 1000으로 나누어 떨어지는지 확인
 * @param {number} purchaseAmount
 */
export const isDivisibleByLottoPrice = (purchaseAmount) => {
  if (purchaseAmount === ZERO || purchaseAmount % LOTTO_PRICE !== ZERO) {
    throw new Error(`${ERROR_PURCHASE_AMOUNT_ZERO}`);
  }
};

const shop = {
  /**
   * 무작위 로또 번호를 반환한다
   * @returns {number[]} - 무작위로 선별된 6자리 로또 번호
   */
  drawLottoNumbers: () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE.smallNumber,
      RANGE.largestNumber,
      PICK_NUMBERS,
    );
  },

  /**
   * 로또 구입금액을 입력받아 구입 가능한 개수만큼 생성하여 반환합니다
   * @param {number} purchaseAmount
   * @returns {[Object, Object, ...]}
   */
  lotterySales: (purchaseAmount) => {
    validationUtils.isIntegerToThrow(purchaseAmount);
    isDivisibleByLottoPrice(purchaseAmount);
    const count = purchaseAmount / LOTTO_PRICE;
    const lottos = [];
    while (lottos.length !== count) {
      const draw = shop.drawLottoNumbers();
      lottos.push(new Lotto(draw));
    }
    return lottos;
  },
};

export default shop;
