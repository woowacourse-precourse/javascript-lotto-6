import { Random } from '@woowacourse/mission-utils';
import OPTIONS from '../constants/options.js';
import Validator from '../validators/Validator.js';

class LottoStore {
  #purchaseAmount;

  #lottos = [];

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate();
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  #lottoGenerator() {
    return Random.pickUniqueNumbersInRange(
      OPTIONS.minLottoNumber,
      OPTIONS.maxLottoNumber,
      OPTIONS.numbersToPick,
    ).sort((currentEl, nextEl) => currentEl - nextEl);
  }

  getLottos() {
    let quantity = this.#purchaseAmount / OPTIONS.baseAmount;

    while (quantity) {
      this.#lottos.push(this.#lottoGenerator());
      quantity -= 1;
    }

    return this.#lottos;
  }
}

export default LottoStore;
