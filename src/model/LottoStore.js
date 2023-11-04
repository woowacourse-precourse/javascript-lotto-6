import { Random } from '@woowacourse/mission-utils';
import OPTIONS from '../constants/options.js';
import Validator from '../validators/Validator.js';
import Lotto from './Lotto.js';

class LottoStore {
  #purchaseAmount;

  #userLottos = [];

  #quantity;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate();
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  #getUniqueNumbers() {
    return Random.pickUniqueNumbersInRange(
      OPTIONS.minLottoNumber,
      OPTIONS.maxLottoNumber,
      OPTIONS.numbersToPick,
    ).sort((currentEl, nextEl) => currentEl - nextEl);
  }

  getUserLottos() {
    this.#quantity = this.#purchaseAmount / OPTIONS.baseAmount;

    while (this.#quantity) {
      const lottoInstance = new Lotto(this.#getUniqueNumbers());
      this.#userLottos.push(lottoInstance.getUserLotto());
      this.#quantity -= 1;
    }

    return this.#userLottos;
  }
}

export default LottoStore;
