import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './utils';
import Lotto from './Lotto';

class LottoPurchase {
  static async askPurchaseAmount() {
    const purchaseAmount = await LottoPurchase.#inputPurchaseAmount();
    LottoPurchase.#validatePurchaseAmount(purchaseAmount);
    return Number(purchaseAmount);
  }

  static async #inputPurchaseAmount() {
    return await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.'
    );
  }

  static #validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount === '') {
      throw new Error(
        '[ERROR] Invalid purchase amount. 아무것도 입력하지 않았습니다.'
      );
    }
    if (Number.isNaN(Number(purchaseAmount))) {
      throw new Error(
        '[ERROR] Invalid purchase amount. 문자를 포함하여 입력하였습니다.'
      );
    }
    if (Number(purchaseAmount) <= 0) {
      throw new Error(
        '[ERROR] Invalid purchase amount. 0 또는 음수를 입력하셨습니다.'
      );
    }
    if (Number(purchaseAmount) % LOTTO_PRICE !== 0) {
      throw new Error(
        `[ERROR] Invalid purchase amount. 로또 금액인 1000으로 나누어 떨어지는 수를 입력하세요.`
      );
    }
  }
}

export default LottoPurchase;
