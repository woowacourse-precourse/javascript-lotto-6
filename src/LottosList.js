import { Random } from '@woowacourse/mission-utils';
import { message, num } from './Constants.js';

import Lotto from './Lotto.js';

import validatePurchaseAmount from './Validation/validatePurchaseAmount.js';

class LottosList {
  #lottosList = [];
  #lottoAmount;

  constructor(purchaseAmount) {
    this.validate(purchaseAmount);
    this.calculateLottoAmount(purchaseAmount);
  }

  validate(purchaseAmount) {
    if (!validatePurchaseAmount(purchaseAmount)) {
      throw new Error(message.ERROR);
    }
  }

  calculateLottoAmount(purchaseAmount) {
    return (this.lottoAmount = purchaseAmount / 1000);
  }

  produceNewLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      num.LOTTO_LOWER_LIMIT,
      num.LOTTO_UPPER_LIMIT,
      num.LOTTO_NUMBERS_QUANTITY
    );

    return new Lotto(numbers);
  }
}

export default LottosList;
